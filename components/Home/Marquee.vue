<script setup>
const list = [
  'marquee.staking',
  'marquee.wallet',
  'marquee.crypto',
  'marquee.blockchain',
  'marquee.web3',
  'marquee.defi',
  'marquee.hash',
  'marquee.eth',
  'marquee.node',
  'marquee.mining',
  'marquee.proof',
  'marquee.community',
  'marquee.participation'
];
</script>

<template>
  <div class="marquee">
    <div class="marquee-content">
      <template v-for="i in 2">
        <template v-for="word in list">
          <div class="marquee-word">{{ $t(word) }}</div>
          <svg viewBox="0 0 330 380">
            <use xlink:href="#cube-a"/>
          </svg>
        </template>
      </template>
    </div>
  </div>
</template>