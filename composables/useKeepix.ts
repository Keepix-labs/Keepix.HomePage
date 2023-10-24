export type Keepix = {
  ip: string;
  name: string;
  url: string;
  alreadySetup: boolean;
};

export const useKeepix = () => {
  const getAll = async () => {
    const list: Keepix[] = [];
    const imagesTry = [];

    for (let i = 20; i < 101; i++) {
      let newImg = { img: new Image(), completed: false };
        newImg.img.onload = () => {
          const ip = `192.168.1.${i}`;
          list.push({
            ip,
            name: ip,
            url: `http://${ip}`,
            alreadySetup: isSetupKeepix(ip),
          });
          newImg.completed = true;
      }
      // Why searching keepix via picture link? -> https://developer.mozilla.org/en-US/docs/Web/Security/Mixed_content
      // Try exists keepix on non https
      newImg.img.src = `http://192.168.1.${i}:9000/api/favicon-32x32.png?${(new Date().getTime())}`;
      imagesTry.push(newImg);
    }

    // wait 3 secondes.
    await new Promise((resolve) => {
      setTimeout(() => resolve(true), 3000);
    });

    // cancel loading 
    for (let img of imagesTry) {
      img.img.src = '';
    }

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
