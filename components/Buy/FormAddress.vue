<script setup>
  const { list } = useCountry()
</script>

<template>
  <form class="modal-form">
    <div class="col">
      <Input icon="ph:user" :label="$t('modal.form.firstname')" name="firstname" required>
        <input type="text" id="firstname" required />
      </Input>
    </div>
    <div class="col">
      <Input icon="ph:user" :label="$t('modal.form.lastname')" name="lastname" required>
        <input type="text" id="lastname" required />
      </Input>
    </div>
    <div class="col">
      <Input icon="ph:buildings" :label="$t('modal.form.company')" name="company" :small="$t('optional')">
        <input type="text" id="company" />
      </Input>
    </div>
    <div class="col">
      <Input icon="ph:device-mobile" :label="$t('modal.form.phone')" name="phone" required>
        <input type="tel" id="phone" required />
      </Input>
    </div>
    <div class="max">
      <Input icon="ph:envelope-simple" :label="$t('modal.form.mail')" name="mail" required>
        <input type="mail" id="mail" required />
      </Input>
    </div>
    <div class="max">
      <Input icon="ph:map-pin" :label="$t('modal.form.address')" name="address" required>
        <input type="text" id="address" required />
      </Input>
    </div>
    <div class="col">
      <Input icon="ph:signpost" :label="$t('modal.form.zip')" name="zip" required>
        <input type="number" id="zip" required />
      </Input>
    </div>
    <div class="col">
      <Input icon="ph:map-trifold" :label="$t('modal.form.city')" name="city" required>
        <input type="text" id="city" required />
      </Input>
    </div>
    <div class="col">
      <Input icon="ph:globe-hemisphere-west" :label="$t('modal.form.country')" name="country" required>
        <select id="country" required>
          <option v-for="country in list">{{ country.name }}</option>
        </select>
      </Input>
    </div>
  </form>
</template>