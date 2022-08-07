import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function useUniqueId(prefix?: string) {
  const id = uuidv4();
  const [uniqueId] = useState(prefix ? `${prefix}-${id}` : id);

  return uniqueId;
}

export default useUniqueId;
