<script setup>
  const network = [
    {
      title: "Ethereum",
      txt: "Ethereum (ETH) - A leading decentralized blockchain platform enabling smart contracts, DApps, and staking on Ethereum 2.0.",
      icon: "cryptocurrency:eth",
      color: "#35a8de",
      apr: 3.6,
      staked: 14485125
    },
    // {
    //   title: "Polygon",
    //   txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, aspernatur.",
    //   icon: "cryptocurrency:matic",
    //   color: "#8a46ff",
    //   apr: 4.7,
    //   staked: 14485125
    // },
    // {
    //   title: "Solana",
    //   txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, aspernatur.",
    //   icon: "cryptocurrency:sol",
    //   color: "#14F195",
    //   apr: 5.8,
    //   staked: 14485125
    // }
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