export type Keepix = {
  ip: string;
  name: string;
  url: string;
  alreadySetup: boolean;
};

export const useKeepix = () => {
  const getAll = async () => {
    const list: Keepix[] = [];

    const fetchPromises = [];

    for (let i = 20; i < 101; i++) {
      const fetchPromise = fetch(`http://192.168.1.${i}:9000/app`, {
        signal: AbortSignal.timeout(3000),
      })
        .then(async (response) => {
          if (response.status === 200) {
            const name = await response.text();
            const ip = `192.168.1.${i}`;

            list.push({
              ip,
              name,
              url: `http://${ip}:9000/`,
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
