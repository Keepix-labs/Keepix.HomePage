export const useKeepix = () => {
  const getAll = async () => {
    const list = [];

    const fetchPromises = [];

    for (let i = 20; i < 101; i++) {
      const fetchPromise = fetch(`http://192.168.1.${i}:9000/app`, {
        signal: AbortSignal.timeout(1000),
      })
        .then(async (response) => {
          if (response.status === 200) {
            const name = await response.text();
            const ip = `192.168.1.${i}`;
            list.push({
              ip,
              name: name,
              url: `http://${ip}`,
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
      return JSON.parse(item);
    }

    return;
  };

  const setSetupKeepix = (ip) => {
    const item = window.localStorage.getItem("keepix-setup");
    let value = [ip];

    if (item) {
      value = JSON.parse(item).push(ip);
    }

    window.localStorage.setItem("keepix-setup", JSON.stringify(value));
  };

  const isSetupKeepix = (ip) => {
    const list = getAllSetupKeepix();

    console.log(list, ip);

    if (list) {
      return list.some((keepixIp) => keepixIp === ip);
    }

    return false;
  };

  return { getAll, getAllSetupKeepix, setSetupKeepix, isSetupKeepix };
};
