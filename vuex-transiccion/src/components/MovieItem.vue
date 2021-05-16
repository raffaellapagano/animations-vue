<template>
    <div class="col-lg-6 mb-3 ">
            <div class="card bg-light" >
                <div class="card-header hTitle d-flex flex-column align-items-center">
                    <h5>{{ movie.title }}</h5>
                    <h6 class="card-subtitle"> Available : {{ movie.available }}</h6>
                </div>
                <div class="card-body">
                <p class="card-text hCard">{{ movie.description }}</p>
            </div>
            </div>       
    </div>
</template>

<script>

export default ({
    props: {
        movie: {
            type: Object,
            required: true
        }
    }
})
</script>

<style scoped>

.hTitle{
    min-height: fit-content;
    height: 100px
}
.hCard{
    min-height: fit-content;
    height: 100px
}

</style>
