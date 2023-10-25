export type Keepix = {
  ip: string;
  name: string;
  url: string;
  alreadySetup: boolean;
  subdomain: string;
};

export const useKeepix = () => {
  const subdomains =  [
    "rose", "lily", "tulip", "elephant", "lotus", "orchid", "dog", "peony", "iris", "violet",
    "tiger", "lion", "leopard", "cheetah", "jaguar", "cougar", "lynx", "cat", "dog", "fox",
    "wolf", "bear", "koala", "panda", "eagle", "hawk", "falcon", "owl", "crow", "sparrow",
    "robin", "finch", "dove", "pigeon", "quail", "duck", "goose", "swan", "turkey", "hen",
    "peafowl", "quokka", "stoat", "otter", "beaver", "marten", "ferret", "mink", "sable", "weasel",
    "shrimp", "prawn", "crab", "lobster", "oyster", "clam", "mussel", "dragon", "slug", "sea",
    "fly", "bee", "ant", "wasp", "moth", "butterfly", "beetle", "dragonfly", "flea", "tick",
    "spider", "scorpion", "park", "cake", "snail", "jeremy", "worm", "snake", "gecko", "lizard",
    "turtle", "tortoise", "alligator", "crocodile", "newt", "salamander", "frog", "toad", "fish", "sabrina",
    "ray", "eel", "cod", "herring", "mackerel", "trout", "salmon", "tuna", "bass", "perch",
    "roach", "carp", "goldfish", "guppy", "molly", "platty", "tetra", "danio", "rasbora", "barb",
    "loach", "catfish", "pleco", "cory", "shark", "gourami", "betta", "angel", "discus", "oscar",
    "ram", "apisto", "puffer", "goby", "blenny", "wrasse", "wine", "tang", "trigger", "parrot",
    "clown", "damsel", "anthias", "basslet", "gramma", "jawfish", "firefish", "hawkfish", "pipefish", "seahorse",
    "star", "urchin", "anemone", "coral", "sponge", "jelly", "octopus", "squid", "cuttle", "nautilus",
    "seaweed", "algae", "moss", "fern", "palm", "oak", "pine", "maple", "birch", "aspen",
    "willow", "cedar", "spruce", "ocean", "larch", "yew", "elm", "ash", "beech", "alder",
    "hazel", "holly", "ivy", "viburnum", "black", "azalea", "camellia", "magnolia", "jasmine", "lavender",
    "sage", "fred", "basil", "oregano", "mint", "nico", "parsley", "cilantro", "dill", "fennel",
    "cumin", "moon", "saffron", "turmeric", "ginger", "garlic", "onion", "leek", "shallot", "chive",
    "apple", "pear", "peach", "plum", "cherry", "grape", "kiwi", "lime", "lemon", "orange",
    "banana", "mango", "melon", "berry", "fig", "date", "olive", "nut", "acorn", "chestnut",
    "pecan", "walnut", "almond", "hazelnut", "pistachio", "cashew", "coconut", "cocoa", "vanilla", "clove",
    "pepper", "mustard", "sesame", "poppy", "sunflower", "daisy", "chamomile", "mina", "rosemary", "thyme",
    "paper", "white", "brown", "pie", "barber", "satoshi", "vitalik", "bull", "fud", "titanic", "titan", "dark", "dock", "blob", "grey"
]

  const getAll = async () => {
    const list: Keepix[] = [];

    const fetchPromises = [];

    for (let i = 1; i < 255; i++) {
      
      const fetchPromise = fetch(`https://${subdomains[i-1]}.keepix.org:9000/app`, {
        signal: AbortSignal.timeout(3000),
      })
        .then(async (response) => {
          if (response.status === 200) {
            const name = await response.text();
            const ip = `192.168.1.${i}`;

            list.push({
              ip,
              subdomain: subdomains[i-1],
              name,
              url: `https://${subdomains[i-1]}.keepix.org`,
              alreadySetup: isSetupKeepix(ip),
            });
          }
        })
        .catch((e) => {});

      fetchPromises.push(fetchPromise);
    }

    await Promise.all(fetchPromises);

    return list;
  };

  const getAllSetupKeepix = () => {
    const item = window.localStorage.getItem("keepix-setup");

    if (item) {
      return JSON.parse(item) as string[];
    }

    return [];
  };

  const setSetupKeepix = (ip: string) => {
    if (isSetupKeepix(ip)) {
      return;
    }

    const item = window.localStorage.getItem("keepix-setup");
    let value = [ip];

    if (item) {
      value = JSON.parse(item);
      value.push(ip);
    }

    window.localStorage.setItem("keepix-setup", JSON.stringify(value));
  };

  const isSetupKeepix = (ip: string) => {
    const list = getAllSetupKeepix();

    if (list) {
      return list.some((keepixIp) => keepixIp === ip);
    }

    return false;
  };

  return { getAll, getAllSetupKeepix, setSetupKeepix, isSetupKeepix };
};
