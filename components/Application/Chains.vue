<script setup>
const list = [
  {
    name: "Solana",
    icon: "formkit:solana",
    color: "#17c8a9"
  },
  {
    name: "Cardano",
    svg: "cardano",
    viewbox: "0 0 375 346.5",
    color: "#3468d1"
  },
  {
    name: "Avalanche",
    icon: "mingcute:avalanche-avax-fill",
    color: "#e84142"
  },
  {
    name: "Ethereum",
    icon: "mdi:ethereum",
    color: "#627eea"
  },
  {
    name: "Bitcoin",
    icon: "ic:outline-currency-bitcoin",
    color: "#f6931b"
  },
  {
    name: "Tron",
    svg: "tron",
    viewbox: "0 0 64 64",
    color: "#ec1f25"
  },
  {
    name: "Polygon",
    icon: "simple-icons:polygon",
    color: "#9431d0"
  },
  {
    name: "Binance Chain",
    icon: "simple-icons:binance",
    color: "#ffc200"
  }
]
</script>

<template>
  <div class="appli-chains"> 
    <div class="content">
      <Heading tag="h1" :small="$t('application.chains.title.small')" :strong="$t('application.chains.title.strong')" />
      <div class="intro" data-reveal>
        <p>{{ $t('application.chains.txt') }}</p>
      </div>
      <div class="appli-chains-marquee">
        <ApplicationIcon />
        <div v-for="i in 2" class="appli-chains-marquee-wrapper">
          <ul>
            <template v-for="i in 2">
              <li v-for="chain in list" :style="`--color: ${chain.color}`">
                <Icon v-if="chain.icon" :name="chain.icon" />
                <svg v-if="chain.svg" :viewBox="chain.viewbox" xmlns:v="https://vecta.io/nano">
                  <use :href="`#chain-${chain.svg}`" />
                </svg>
                <span>{{ chain.name }}</span>
              </li>
            </template>
          </ul>
        </div>
      </div>
    </div>
    <div class="appli-chains-logo animated-logo">
      <Logo />
    </div>
  </div>
</template>