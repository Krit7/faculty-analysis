<template>
    <div class="container-fluid footer">
        <div class="row footer-row">
            <div class="col-lg-12 copyright-col">
                <p class="copyright-text">Krit Verma 2017348 & Jatin Garg 2017345</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    methods:{
        getYear(){
            var CurrentYear = new Date().getFullYear();
            return CurrentYear;
        }
    }
}
</script>

<style scoped>

.footer{
    margin-top: 25px;
}
.footer-row{
    height: 50px;
    background-color: #f7c033;
}
.copyright-col{
    text-align: center;
}
.copyright-text{
    font-size: 14px;
    font-family: sans-serif !important;
    padding-top: 1.2%;
    color: black;
}


</style>