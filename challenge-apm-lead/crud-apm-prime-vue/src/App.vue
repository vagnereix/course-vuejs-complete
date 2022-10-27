<template>
  <div class="container">
    <div class="card">
      <Toolbar
        :selectedProducts="selectedProducts"
        :confirmDeleteSelected="confirmDeleteSelected"
        :exportCSV="exportCSV"
        :openNew="openNew"
      />

      <Table
        :products="products"
        :selectedProducts="selectedProducts"
        :filters="filters"
        :formatCurrency="formatCurrency"
        :editProduct="editProduct"
        :confirmDeleteProduct="confirmDeleteProduct"
      />
    </div>

    <DialogNewProduct
      :productDialog="productDialog"
      :product="product"
      :hideDialog="hideDialog"
      :saveProduct="saveProduct"
      :submitted="submitted"
    />

    <DialogDeleteSingleProduct
      :hideDialog="hideDialog"
      :deleteProductDialog="deleteProductDialog"
      :product="product"
      :deleteProduct="deleteProduct"
    />

    <DialogDeleteMultipleProducts
      :hideDialog="hideDialog"
      :deleteProductsDialog="deleteProductsDialog"
      :product="product"
      :deleteSelectedProducts="deleteSelectedProducts"
    />

    <Toast />
  </div>
</template>

<script>
import { FilterMatchMode } from 'primevue/api';

import DialogDeleteMultipleProducts from './components/DialogDeleteMultipleProducts.vue';
import DialogDeleteSingleProduct from './components/DialogDeleteSingleProduct.vue';
import DialogNewProduct from './components/DialogNewProduct.vue';
import Table from './components/Table.vue';
import Toolbar from './components/Toolbar.vue';

import ProductService from './services/ProductService';

export default {
  components: {
    Toolbar,
    DialogDeleteMultipleProducts,
    DialogDeleteSingleProduct,
    DialogNewProduct,
    Table,
  },
  data() {
    return {
      products: null,
      productDialog: false,
      deleteProductDialog: false,
      deleteProductsDialog: false,
      product: {},
      selectedProducts: null,
      filters: {},
      submitted: false,
    };
  },
  productService: null,
  created() {
    this.productService = new ProductService();
    this.initFilters();
  },
  mounted() {
    this.productService.getProducts().then((data) => (this.products = data));
  },
  methods: {
    formatCurrency(value) {
      if (value)
        return value.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
        });
      return;
    },
    openNew() {
      this.product = {};
      this.submitted = false;
      this.productDialog = true;
    },
    hideDialog() {
      this.deleteProductsDialog = false;
      this.deleteProductDialog = false;
      this.productDialog = false;
      this.submitted = false;
    },
    saveProduct() {
      this.submitted = true;

      if (this.product.name.trim()) {
        if (this.product.id) {
          this.product.inventoryStatus = this.product.inventoryStatus.value
            ? this.product.inventoryStatus.value
            : this.product.inventoryStatus;
          this.products[this.findIndexById(this.product.id)] = this.product;
          this.$toast.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Product Updated',
            life: 3000,
          });
        } else {
          this.product.id = this.createId();
          this.product.code = this.createId();
          this.product.image = 'product-placeholder.svg';
          this.product.inventoryStatus = this.product.inventoryStatus
            ? this.product.inventoryStatus.value
            : 'INSTOCK';
          this.products.push(this.product);
          this.$toast.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Product Created',
            life: 3000,
          });
        }

        this.productDialog = false;
        this.product = {};
      }
    },
    editProduct(product) {
      this.product = { ...product };
      this.productDialog = true;
    },
    confirmDeleteProduct(product) {
      this.product = product;
      this.deleteProductDialog = true;
    },
    deleteProduct() {
      this.products = this.products.filter((val) => val.id !== this.product.id);
      this.deleteProductDialog = false;
      this.product = {};
      this.$toast.add({
        severity: 'success',
        summary: 'Successful',
        detail: 'Product Deleted',
        life: 3000,
      });
    },
    findIndexById(id) {
      let index = -1;
      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].id === id) {
          index = i;
          break;
        }
      }

      return index;
    },
    createId() {
      let id = '';
      var chars =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      for (var i = 0; i < 5; i++) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return id;
    },
    exportCSV() {
      this.$refs.dt.exportCSV();
    },
    confirmDeleteSelected() {
      this.deleteProductsDialog = true;
    },
    deleteSelectedProducts() {
      this.products = this.products.filter(
        (val) => !this.selectedProducts.includes(val)
      );
      this.deleteProductsDialog = false;
      this.selectedProducts = null;
      this.$toast.add({
        severity: 'success',
        summary: 'Successful',
        detail: 'Products Deleted',
        life: 3000,
      });
    },
    initFilters() {
      this.filters = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  widows: 100%;
  max-width: 1440px;
  margin: 0 auto;
}

.table-header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 960px) {
    align-items: start;
  }
}

.product-image {
  width: 50px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.p-dialog .product-image {
  width: 50px;
  margin: 0 auto 2rem auto;
  display: block;
}

.confirmation-content {
  display: flex;
  align-items: center;
  justify-content: center;
}
@media screen and (max-width: 960px) {
  ::v-deep(.p-toolbar) {
    flex-wrap: wrap;

    .p-button {
      margin-bottom: 0.25rem;
    }
  }
}
</style>
