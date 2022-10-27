<template>
  <Dialog
    header="Confirm"
    v-model:visible="deleteProductDialog"
    :style="{ width: '450px' }"
    :modal="true"
  >
    <div class="confirmation-content">
      <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
      <span v-if="product"
        >Are you sure you want to delete <b>{{ product.name }}</b
        >?</span
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
        @click="deleteProduct"
      />
    </template>
  </Dialog>
</template>

<script>
export default {
  props: {
    hideDialog: Function,
    deleteProductDialog: Boolean,
    product: Object,
    deleteProduct: Function,
  },
};
</script>
