<script setup>
const network = [
{
  "title": "Ethereum",
  "txt": "Ethereum (ETH) is a leading decentralized blockchain platform enabling smart contracts and DApps. It features a Rocketpool plugin for staking with less ETH required and RPL collateral, enhancing accessibility and efficiency.",
  "icon": "cryptocurrency:eth",
  "color": "#35a8de",
  "apr": 3.6,
  "staked": 14485125
},
{
  "title": "Polygon",
  "txt": "Polygon (MATIC) offers a scalable and efficient multi-chain system. It's known for lower transaction fees and faster speeds, with the ability to delegate directly to validators through its plugin on Keepix.",
  "icon": "cryptocurrency:matic",
  "color": "#8a46ff",
  "apr": 4.7,
  "staked": "0"
},
{
  "title": "Tezos",
  "txt": "Tezos (XTZ) is a self-amending cryptographic ledger featuring formal verification, making it secure against buggy code. Keepix's plugin allows direct delegation to validators for seamless staking.",
  "icon": "cryptocurrency:xtz",
  "color": "#2C7DF7",
  "apr": "0",
  "staked": "0"
}

]
</script>

<template>
  <div class="network">
    <div class="content">
      <Heading :small="$t('index.network.title.small')" :strong="$t('index.network.title.strong')" />
      <ul>
        <li v-for="chain in network" :style="`--color: ${chain.color}`" data-reveal>
          <div class="logo" data-reveal="top">
            <Icon :name="chain.icon" />
          </div>
          <h3>{{ chain.title }}</h3>
          <p>{{ chain.txt }}</p>
          <div class="btn-group" data-reveal>
            <Btn href="#product" :text="$t('index.network.stake')" icon="material-symbols:arrow-forward-rounded" attr="secondary" bordered />
          </div>
          <Icon class="svg-back" :name="chain.icon" />
        </li>
      </ul>
    </div>
  </div>
</template>