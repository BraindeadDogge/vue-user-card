<template>
  <div class="user-card">
    <img :src="url" class="user-photo">
    <p class="user-nickname">{{login}}</p>
    <p class="user-name">
        {{lastname}} {{name}}<br>
        {{extraname}}
    </p>
    <hr>
    <p class="user-info-item">
        <img src="img/location.png">
        {{adress}}
    </p>
    <p class="user-info-item">
        <img src="img/mail.png">
        {{mail}}
    </p>
    <p class="user-info-item">
        <img src="img/phone.png">
        {{phone}}
    </p>
  </div>
</template>

<script>
export default {
    name: 'Usercard',
    props: ['url', 'login', 'name', 'secondname', 'extraname', 'adress', 'mail', 'phone', ],
    data() {
        return {}
    }
}
</script>

<style lang="scss">

</style>
