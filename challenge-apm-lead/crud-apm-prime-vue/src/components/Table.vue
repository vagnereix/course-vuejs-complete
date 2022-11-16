<template>
  <DataTable
    ref="dt"
    dataKey="id"
    responsiveLayout="scroll"
    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
    :value="products"
    :paginator="true"
    :rows="10"
    :filters="filters"
    :rowsPerPageOptions="[5, 10, 25]"
    v-model:selection="selectedProducts"
  >
    <template #header>
      <div
        class="table-header flex flex-column md:flex-row md:justify-content-between"
      >
        <h5 class="mb-2 md:m-0 p-as-md-center">Manage Products</h5>
        <span class="p-input-icon-left">
          <i class="pi pi-search" />
          <InputText
            placeholder="Search..."
            v-model="filters['global'].value"
          />
        </span>
      </div>
    </template>

    <Column
      selectionMode="multiple"
      style="width: 3rem"
      :exportable="false"
    ></Column>

    <Column
      field="code"
      header="Code"
      style="min-width: 12rem"
      :sortable="true"
    ></Column>

    <Column
      field="name"
      header="Name"
      style="min-width: 16rem"
      :sortable="true"
    ></Column>

    <Column
      field="price"
      header="Price"
      style="min-width: 8rem"
      :sortable="true"
    >
      <template #body="slotProps">
        {{ formatCurrency(slotProps.data.price) }}
      </template>
    </Column>

    <Column
      field="category"
      header="Category"
      style="min-width: 10rem"
      :sortable="true"
    ></Column>

    <Column
      field="inventoryStatus"
      header="Status"
      style="min-width: 12rem"
      :sortable="true"
    >
      <template #body="slotProps">
        <span
          :class="
            'product-badge status-' +
            (slotProps.data.inventoryStatus
              ? slotProps.data.inventoryStatus.toLowerCase()
              : '')
          "
          >{{ slotProps.data.inventoryStatus }}</span
        >
      </template>
    </Column>

    <Column :exportable="false" style="min-width: 8rem">
      <template #body="slotProps">
        <Button
          icon="pi pi-pencil"
          class="p-button-rounded p-button-success mr-2"
          @click="editProduct(slotProps.data)"
        />
        <Button
          icon="pi pi-trash"
          class="p-button-rounded p-button-warning"
          @click="confirmDeleteProduct(slotProps.data)"
        />
      </template>
    </Column>
  </DataTable>
</template>

<script>
export default {
  props: {
    products: Array,
    selectedProducts: Array,
    filters: Object,
    formatCurrency: Function,
    editProduct: Function,
    confirmDeleteProduct: Function,
  },
  methods: {},
};
</script>
