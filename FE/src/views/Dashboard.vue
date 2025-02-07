<script setup>
// import BestSellingWidget from '@/components/dashboard/BestSellingWidget.vue';
import NotificationsWidget from '@/components/dashboard/NotificationsWidget.vue';
// import RecentSalesWidget from '@/components/dashboard/RecentSalesWidget.vue';
// import RevenueStreamWidget from '@/components/dashboard/RevenueStreamWidget.vue';
// import StatsWidget from '@/components/dashboard/StatsWidget.vue';
import SquadreCarouselWidget from '@/components/dashboard/SquadreCarouselWidget.vue';
import PartiteWidget from '@/components/dashboard/PartiteWidget.vue';
</script>

<template>
        <div class ="col-3">
        </div>
        <div class ="col-6 ms-20 me-20">
            <div class = "row">
                <SquadreCarouselWidget />
            </div>
            <div class = "row" style="display: flex !important;">
                <div class ="col-6 me-8">
                    <PartiteWidget />
                </div>
                <div class ="col-6 mt-8">
                    <NotificationsWidget />
                </div>
            </div>
        
        </div>
        <div class ="col-3">
        </div>
    <!-- <div class="grid grid-cols-12 gap-8">
        <StatsWidget />

        <div class="col-span-12 xl:col-span-6">
            <RecentSalesWidget />
            <BestSellingWidget />
        </div>
        <div class="col-span-12 xl:col-span-6">
            <RevenueStreamWidget />
            <NotificationsWidget />
        </div>
    </div> -->
</template>
