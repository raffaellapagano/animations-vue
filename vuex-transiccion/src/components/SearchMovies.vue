<template>
    <div class="row">
        <div class="col">
            <div class="form-group mb-2">
                <label class="sr-only">Escribe tu búsqueda</label>
                <input type="text" v-model="search" class="form-control" />
            </div>

            <div class="form-check form-check-inline">
                <input type="radio" class="form-radio-input" v-model="available" :value="true" /> Disponible 
            </div>
            <div class="form-check form-check-inline">
                <input type="radio" class="form-radio-input" v-model="available" :value="false" /> No Disponible
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        search: {
            get() {
             return this.$store.state.filter.query;
            },
            set(value) {
                this.$store.commit('SetQuery', value)
            }
        },
        available: {
            get () {
                return this.$store.state.filter.available;
            },
            set() {
                this.$store.commit('SetAvailable');
            }
        }
    }
}
</script>
