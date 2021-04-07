<template>
  <v-treeview
    v-model="tree"
    :open="initiallyOpen"
    :items="items"
    activatable
    item-key="name"
    open-on-click
  >
    <template v-slot:prepend="{ item, open }">
      <v-icon v-if="!item.file">
        {{ open ? "mdi-folder-open" : "mdi-folder" }}
      </v-icon>
      <v-icon v-else>
        {{ files[item.file] ? files[item.file] : files.file }}
      </v-icon>
    </template>
  </v-treeview>
</template>

<script>
// 由 list 生成文件树 https://stackoverflow.com/questions/57344694/create-a-tree-from-a-list-of-strings-containing-paths-of-files-javascript
export default {
  data: () => ({
    initiallyOpen: ["public"],
    files: {
      html: "mdi-language-html5",
      js: "mdi-nodejs",
      json: "mdi-code-json",
      md: "mdi-language-markdown",
      pdf: "mdi-file-pdf",
      png: "mdi-file-image",
      txt: "mdi-file-document-outline",
      xls: "mdi-file-excel",
      file: "mdi-file-outline",
    },
    tree: [],
    items: Array,
  }),
  props: {
    paths: Array,
  },
  created() {
    this.items = list2FileTree(this.paths);
  },
};

function list2FileTree(paths) {
  let result = [];
  let level = { result };

  // 肯定是文件, 那么就不会生成空目录
  paths.forEach((path) => {
    path.split("/").reduce((r, name) => {
      if (!r[name]) {
        r[name] = { result: [] };
        if (name.split(".").length > 1) {
          let file = { name, file: name.split(".")[1] };
          r.result.push(file);
        } else {
          r.result.push({ name, children: r[name].result });
        }
      }

      return r[name];
    }, level);
  });

  console.log(result);
  return result;
}
</script>

<style>
</style>