<template>
  <Dialog
    v-model:visible="deleteProductsDialog"
    :style="{ width: '450px' }"
    header="Confirm"
    :modal="true"
  >
    <div class="confirmation-content">
      <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
      <span v-if="product"
        >Are you sure you want to delete the selected products?</span
      >
    </div>
    <template #footer>
      <Button
        label="No"
        icon="pi pi-times"
        class="p-button-text"
        @click="hideDialog"
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        class="p-button-text"
        @click="deleteSelectedProducts"
      />
    </template>
  </Dialog>
</template>

<script>
export default {
  props: {
    hideDialog: Function,
    deleteProductsDialog: Boolean,
    product: Object,
    deleteSelectedProducts: Function,
  },
};
</script>
