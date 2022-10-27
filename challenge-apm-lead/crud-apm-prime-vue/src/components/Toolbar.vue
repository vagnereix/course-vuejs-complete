<template>
  <Toolbar class="mb-4">
    <template #start>
      <Button
        label="New"
        icon="pi pi-plus"
        class="p-button-success mr-2"
        @click="openNew"
      />
      <Button
        label="Delete"
        icon="pi pi-trash"
        class="p-button-danger"
        @click="confirmDeleteSelected"
        :disabled="!selectedProducts || !selectedProducts.length"
      />
    </template>

    <template #end>
      <FileUpload
        mode="basic"
        accept="image/*"
        :maxFileSize="1000000"
        label="Import"
        chooseLabel="Import"
        class="mr-2 inline-block"
      />
      <Button
        label="Export"
        icon="pi pi-upload"
        class="p-button-help"
        @click="exportCSV($event)"
      />
    </template>
  </Toolbar>
</template>

<script>
export default {
  props: {
    selectedProducts: Array,
    confirmDeleteSelected: Function,
    exportCSV: Function,
    openNew: Function,
  },
  methods: {},
};
</script>
