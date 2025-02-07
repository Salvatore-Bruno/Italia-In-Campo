<template>
        <div class="font-semibold text-xl mb-4">Squadre In Primo Piano</div>
        <Carousel class="card mb-2" :value="products" :numVisible="3" :numScroll="1" :responsiveOptions="carouselResponsiveOptions">
            <template #item="slotProps">
                <div class="border border-surface-200 dark:border-surface-700 rounded m-2 p-4">
                    <div class="mb-4">
                        <div class="relative mx-auto">
                            <img src='../../../public/squadra.jpg' :alt="slotProps.data.name" class="w-full rounded" />
                            <div class="dark:bg-surface-900 absolute rounded-border" style="left: 5px; top: 5px">
                                <Tag :value="slotProps.data.status" :severity="getSeverity(slotProps.data.severity)" />
                            </div>
                        </div>
                    </div>
                    <div class="mb-4 font-semibold text-xl">{{ slotProps.data.name }}</div>
                    <div class="flex justify-between items-center">
                        <div class="mt-0 font-medium">{{ slotProps.data.location }}</div>
                        <span>
                            <Button icon="pi pi-heart" severity="secondary" outlined />
                        </span>
                    </div>
                </div>
            </template>
        </Carousel>
</template>

<script setup>
import { PhotoService } from '@/service/PhotoService';
import { SquadreService } from '@/service/SquadreService';
import { onMounted, ref } from 'vue';

const products = ref([]);

const carouselResponsiveOptions = ref([
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }
]);

onMounted(() => {
    SquadreService.getProductsSmall().then((data) => (products.value = data));
    PhotoService.getImages().then((data) => (images.value = data));
});

function getSeverity(severity) {
    switch (severity) {
        case 1:
            return 'success';

        case 2:
            return 'warning';

        case 3:
            return 'danger';

        default:
            return null;
    }
}
</script>