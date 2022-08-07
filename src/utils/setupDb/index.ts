import genKey from "~/utils/genKey";
import data from "./data.json";

export type Board = typeof data.boards[number];

export const db = new PouchDB<Board>("boards");

export const getList = () =>
  db
    .find({
      selector: { name: { $exists: true } },
      fields: ["_id", "name"],
      sort: ["name"],
    })
    .then((result) => {
      return result.docs;
    })
    .catch((error) => error);

const setupDb = () => {
  const init = () =>
    db.createIndex({ index: { fields: ["name"] } }).then(() =>
      data.boards.map((board) =>
        db
          .put({ ...board, _id: genKey() })
          .then((result) => {
            console.log("Database initialized:", result);
            return result;
          })
          .catch((error) => error),
      ),
    );

  return db
    .info()
    .then((result) => {
      console.log("Database connected:", result);
      if (!result.doc_count) {
        return init();
      }
    })
    .then(() => getList())
    .then((list) => list)
    .catch((error) => {
      console.error(error);
    });
};

export default setupDb;
