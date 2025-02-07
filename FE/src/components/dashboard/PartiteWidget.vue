<template>
    <div class="font-semibold text-xl mb-4 mt-4">Calendario Partite</div>
    <div class="p-col-12 p-md-6 p-lg-4 mt-3">
        <div class="card">
            <div class="card-body">
                <Tabs value="0" class="bg-primary">
                    <TabList>
                        <Tab @click="toggleDataTable(false)" value="0">In Programma</Tab>
                        <Tab  @click="toggleDataTable(true)" value="1">Concluse</Tab>
                    </TabList>
                </Tabs>
                <div class="mt-4">
                    <div class="card" :key="isConcluse">
                        <div v-for="group in partite" class="card" style="display: flex !important">
                            <div class="card-title">
                                <!-- all in one line <div class="font-semibold">
                                    <img src="https://fakeimg.pl/32x32?text=Logo+Provincia" alt="avatar" class="avatar" />{{group.location}}
                                </div>-->
                                <div class="font-semibold bg-primary p-3 rounded" style="display: flex; align-content: flex-end; align-items: flex-end;">
                                    <img src="https://fakeimg.pl/32x32?text=Logo+Provincia" alt="avatar" class="avatar me-5" />
                                    {{group.location}}
                                </div>
                                    <!-- <table v-for="partita in group.partite">
                                        <tr>
                                        <td class="me-8">
                                            <div class="font-semibold">{{partita.data}}    </div>
                                        </td>
                                        <td class="me-4">
                                            <div class="font-semibold">{{partita.ora}}     </div>
                                        </td>
                                        <td class="me-4">
                                            <tr>
                                                <div class="font-semibold">{{partita.squadraCasa}}     </div>
                                            </tr>
                                            <tr>
                                                <div class="font-semibold">{{partita.squadraOspite}}     </div>
                                            </tr>
                                        </td>
                                        <td v-if="isConcluse" class="me-4">
                                            <div class="font-semibold">{{partita.risultato}}     </div>
                                        </td>
                                        <td class="me-4">
                                            <div class="font-semibold">{{partita.campo}}     </div>
                                        </td>
                                        <td class="me-4">
                                            <Button icon="pi pi-eye" />
                                        </td>
                                    </tr> with bootstrap cols and rows-->
                                    <div v-for="partita in group.partite" class="row mt-3" style="display: flex; align-items: center;">
                                        
                                    <hr class="dropdown-divider color-primary mt-2">
                                        <div class="col-2 me-5">
                                            <div class="font-semibold">{{partita.data}}</div>
                                        </div>
                                        <div class="col-2 me-5">
                                            <div class="font-semibold">{{partita.ora}}</div>
                                        </div>
                                        <div class="col-2 me-5">
                                            <div class="font-semibold row">{{partita.squadraCasa}}</div>
                                            
                                        <hr class="dropdown-divider">
                                            <div class="font-semibold row">{{partita.squadraOspite}}</div>
                                        </div>
                                        <div v-if="isConcluse" class="col-2 me-5">
                                            <div class="font-semibold">{{partita.risultato}}</div>
                                        </div>
                                        <div class="col-2 me-5">
                                            <div class="font-semibold">{{partita.campo}}</div>
                                        </div>
                                        <div class="col-2 me-5">
                                            <Button icon="pi pi-eye" />
                                        </div>
                                        
                                    </div>
                                    <hr class="dropdown-divider mt-2">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue';
import { PartiteService } from '@/service/PartiteService';

const partite = ref([]);
let isConcluse = ref(false);

onMounted(() => {
    PartiteService.getPartiteComputed(false)
        .then((data) => (partite.value = data))
        .catch((error) => console.log(error));
});

function toggleDataTable(value){
        isConcluse = value;
        PartiteService.getPartiteComputed(value).then((data) => (partite.value = data));
}
</script>
<style>
.div{
    display: flex !important;
    flex-direction: column;
}
</style>