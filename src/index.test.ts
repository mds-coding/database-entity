import { DatabaseEntity } from "./index"

test("`DatabaseEntity` can be created", () => {
  const entity = new DatabaseEntity("entity-id", "collection", { hello: "world" });
  expect(entity).toBeDefined();
  expect(entity.id).toBe("entity-id");
  expect(entity.collection).toBe("collection");
  expect(entity.data).toStrictEqual({ hello: "world" });
})
