<template>
  <div class="wrapper">
    <h1>TreeStore Test</h1>

    <div class="treeStoreHtml">
      <div class="treeStoreHtml__item">
        <h2 class="treeStoreHtml__itemHeader">getAll()</h2>
        <pre class="treeStoreHtml__itemBody">{{ JSON.stringify(treeStore.getAll(), null, 2) }}</pre>
      </div>

      <div class="treeStoreHtml__item">
        <h2 class="treeStoreHtml__itemHeader">getItem(7)</h2>
        <pre class="treeStoreHtml__itemBody">{{ JSON.stringify(treeStore.getItem(7), null, 2) }}</pre>
      </div>

      <div class="treeStoreHtml__item">
        <h2 class="treeStoreHtml__itemHeader">getChildren(4)</h2>
        <pre class="treeStoreHtml__itemBody">{{ JSON.stringify(treeStore.getChildren(4), null, 2) }}</pre>
      </div>

      <div class="treeStoreHtml__item">
        <h2 class="treeStoreHtml__itemHeader">getChildren(5)</h2>
        <pre class="treeStoreHtml__itemBody">{{ JSON.stringify(treeStore.getChildren(5), null, 2) }}</pre>
      </div>

      <div class="treeStoreHtml__item">
        <h2 class="treeStoreHtml__itemHeader">getChildren(2)</h2>
        <pre class="treeStoreHtml__itemBody">{{ JSON.stringify(treeStore.getChildren(2), null, 2) }}</pre>
      </div>

      <div class="treeStoreHtml__item">
        <h2 class="treeStoreHtml__itemHeader">getAllChildren(2)</h2>
        <pre class="treeStoreHtml__itemBody">{{ JSON.stringify(treeStore.getAllChildren(2), null, 2) }}</pre>
      </div>

      <div class="treeStoreHtml__item">
        <h2 class="treeStoreHtml__itemHeader">getAllParents(7)</h2>
        <pre class="treeStoreHtml__itemBody">{{ JSON.stringify(treeStore.getAllParents(7), null, 2) }}</pre>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { TreeStore, TreeNode } from './classes/TreeStore';

const items: TreeNode[] = [
  { id: 1, parent: 'root' },
  { id: 2, parent: 1, type: 'test' },
  { id: 3, parent: 1, type: 'test' },
  { id: 4, parent: 2, type: 'test' },
  { id: 5, parent: 2, type: 'test' },
  { id: 6, parent: 2, type: 'test' },
  { id: 7, parent: 4, type: null },
  { id: 8, parent: 4, type: null },
];

const treeStore = new TreeStore(items);
</script>
<style lang="scss">
  @import './styles/treeStore.scss';
</style>