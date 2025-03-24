const tree = [
  {
    id: 16,
    parentId: 0,
    children: [
      {
        id: 18,
        parentId: 16,
        children: []
      },
      {
        id: 17,
        parentId: 16,
        children: []
      }
    ]
  },
  {
    id: 19,
    parentId: 0,
    children: [
      {
        id: 20,
        parentId: 19,
        children: [
          {
            id: 21,
            parentId: 20,
            children: [
              {
                id: 22,
                parentId: 21,
                children: [
                  {
                    id: 23,
                    parentId: 22,
                    children: [
                      {
                        id: 24,
                        parentId: 23,
                        children: []
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];
function treeToArray(tree) {
  let res = [];
  for (const item of tree) {
    const { children, ...i } = item;
    /// i是对 item的重新命名
    if (children && children.length) {
      res = res.concat(treeToArray(children));
    }
    res.push(i);
  }
  return res;
}
