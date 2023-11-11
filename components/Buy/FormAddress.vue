<script setup>
const { list } = useCountry()
const props = defineProps(['type']);

const formData = inject('formData');
const differentAddress = inject('differentAddress');

const handleChange = (evt) => {
  if (!formData || !differentAddress) {
    return;
  }

  if (differentAddress.value) {
    formData[props.type][evt.target.id] = evt.target.value;
  } else {
    formData['shipping'][evt.target.id] = evt.target.value;
    formData['billing'][evt.target.id] = evt.target.value;
  }
}

watch(differentAddress, (newDifferentAddress) => {
  if (!newDifferentAddress) {
    formData['billing'] = { ...formData['shipping'] };
  } else {
    Object.keys(formData['billing']).forEach((key) => formData['billing'][key] = '');
  }
});
</script>

<template>
  <form class="modal-form">
    <div class="col">
      <Input icon="ph:user" :label="$t('modal.form.firstname')" name="firstname" required>
      <input type="text" id="first_name" required @input="handleChange" />
      </Input>
    </div>
    <div class="col">
      <Input icon="ph:user" :label="$t('modal.form.lastname')" name="lastname" required>
      <input type="text" id="last_name" required @input="handleChange" />
      </Input>
    </div>
    <div class="col">
      <Input icon="ph:buildings" :label="$t('modal.form.company')" name="company" :small="$t('optional')">
      <input type="text" id="company" />
      </Input>
    </div>
    <div class="col">
      <Input icon="ph:device-mobile" :label="$t('modal.form.phone')" name="phone" required>
      <input type="tel" id="phone" required @input="handleChange" />
      </Input>
    </div>
    <div class="max">
      <Input icon="ph:envelope-simple" :label="$t('modal.form.mail')" name="mail" required>
      <input type="mail" id="email" required @input="handleChange" />
      </Input>
    </div>
    <div class="max">
      <Input icon="ph:map-pin" :label="$t('modal.form.address')" name="address" required>
      <input type="text" id="address_1" required @input="handleChange" />
      </Input>
    </div>
    <div class="col">
      <Input icon="ph:signpost" :label="$t('modal.form.zip')" name="zip" required>
      <input type="number" id="postcode" required @input="handleChange" />
      </Input>
    </div>
    <div class="col">
      <Input icon="ph:map-trifold" :label="$t('modal.form.city')" name="city" required>
      <input type="text" id="city" required @input="handleChange" />
      </Input>
    </div>
    <div class="col">
      <Input icon="ph:globe-hemisphere-west" :label="$t('modal.form.country')" name="country" required>
      <select id="country" required @input="handleChange">
        <option disabled selected>Select your country</option>
        <option v-for="country in list">{{ country.name }}</option>
      </select>
      </Input>
    </div>
  </form>
</template>