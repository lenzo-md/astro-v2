const { command, isPrivate } = require("../lib");
const axios = require('axios');
command({
  pattern: "waifu",
  fromMe: isPrivate,
  desc: "waifuuuu",
  type: "anime",
  }, async (m, message, match) => {
    var res = await axios.get('https://api-ironman444ff.koyeb.app/ironman/waifu');
    var img = res.data.ironman.url;
    await m.sendFromUrl(img);
    });
//astro-xd
command({
  pattern: "neko",
  fromMe: isPrivate,
  desc: "waifuuuu",
  type: "anime",
  }, async (m, message, match) => {
    var res = await axios.get('https://api-ironman444ff.koyeb.app/ironman/neko');
    var img = res.data.ironman.url;
    await m.sendFromUrl(img);
    });
//astro-xd
command({
  pattern: "anna",
  fromMe: true,
  desc: "waifuuuu",
  type: "anime",
  }, async (m, message, match) => {
    var res = await axios.get('https://api.maher-zubair.tech/anime/anna');
    var img = res.data.url;
    await m.sendFromUrl(img);
    });
//astro-xd
command({
  pattern: "shinobu",
  fromMe: true,
  desc: "waifuuuu",
  type: "anime",
  }, async (m, message, match) => {
    var res = await axios.get('https://waifu.pics/api/sfw/shinobu');
    var img = res.data.url;
    await m.sendFromUrl(img);
    });
//astro-xd
command({
  pattern: "akira",
  fromMe: true,
  desc: "waifuuuu",
  type: "anime",
  }, async (m, message, match) => {
    var res = await axios.get('https://api.maher-zubair.tech/anime/akira');
    var img = res.data.url;
    await m.sendFromUrl(img);
    });
//astro-xd
command({
  pattern: "shota",
  fromMe: true,
  desc: "waifuuuu",
  type: "anime",
  }, async (m, message, match) => {
    var res = await axios.get('https://api.maher-zubair.tech/anime/shota');
    var img = res.data.url;
    await m.sendFromUrl(img);
    });
//astro-xd
command({
  pattern: "husbu",
  fromMe: true,
  desc: "anime",
  type: "anime",
  }, async (m, message, match) => {
    var res = await axios.get('https://api.maher-zubair.tech/anime/husbu');
    var img = res.data.url;
    await m.sendFromUrl(img);
    });
//astro-xd
command({
  pattern: "sasuke",
  fromMe: true,
  desc: "anime",
  type: "anime",
  }, async (m, message, match) => {
    var res = await axios.get('https://api.maher-zubair.tech/anime/sasuke');
    var img = res.data.url;
    await m.sendFromUrl(img);
    }); 
//astro-xd
command({
  pattern: "sakura",
  fromMe: true,
  desc: "anime",
  type: "anime",
  }, async (m, message, match) => {
    var res = await axios.get('https://api.maher-zubair.tech/anime/sakura');
    var img = res.data.url;
    await m.sendFromUrl(img);
    });   
//astro-xd
command({
  pattern: "nezuko",
  fromMe: true,
  desc: "anime",
  type: "anime",
  }, async (m, message, match) => {
    var res = await axios.get('https://api.maher-zubair.tech/anime/nezuko');
    var img = res.data.url;
    await m.sendFromUrl(img);
    });
//astro-xd
command({
  pattern: "naruto",
  fromMe: true,
  desc: "anime",
  type: "anime",
  }, async (m, message, match) => {
    var res = await axios.get('https://api.maher-zubair.tech/anime/naruto');
    var img = res.data.url;
    await m.sendFromUrl(img);
    }); 
//astro-xd
command({
  pattern: "miku",
  fromMe: true,
  desc: "anime",
  type: "anime",
  }, async (m, message, match) => {
    var res = await axios.get('https://api.maher-zubair.tech/anime/miku');
    var img = res.data.url;
    await m.sendFromUrl(img);
    });
//astro-xd
command({
  pattern: "kurumi",
  fromMe: true,
  desc: "anime",
  type: "anime",
  }, async (m, message, match) => {
    var res = await axios.get('https://api.maher-zubair.tech/anime/kurumi');
    var img = res.data.url;
    await m.sendFromUrl(img);
    }); 
//astro-xd
command({
  pattern: "kotori",
  fromMe: true,
  desc: "anime",
  type: "anime",
  }, async (m, message, match) => {
    var res = await axios.get('https://api.maher-zubair.tech/anime/kotori');
    var img = res.data.url;
    await m.sendFromUrl(img);
    }); 
//astro-xd
command({
  pattern: "kaori",
  fromMe: true,
  desc: "anime",
  type: "anime",
  }, async (m, message, match) => {
    var res = await axios.get('https://api.maher-zubair.tech/anime/kaori');
    var img = res.data.url;
    await m.sendFromUrl(img);
    }); 
//astro-xd
command({
  pattern: "kaga",
  fromMe: true,
  desc: "anime",
  type: "anime",
  }, async (m, message, match) => {
    var res = await axios.get('https://api.maher-zubair.tech/anime/kaga');
    var img = res.data.url;
    await m.sendFromUrl(img);
    }); 
//astro-xd
command({
  pattern: "itori",
  fromMe: true,
  desc: "anime",
  type: "anime",
  }, async (m, message, match) => {
    var res = await axios.get('https://api.maher-zubair.tech/anime/itori');
    var img = res.data.url;
    await m.sendFromUrl(img);
    }); 
//astro-xd
command({
  pattern: "itachi",
  fromMe: true,
  desc: "anime",
  type: "anime",
  }, async (m, message, match) => {
    var res = await axios.get('https://api.maher-zubair.tech/anime/itachi');
    var img = res.data.url;
    await m.sendFromUrl(img);
    }); 
//astro-xd
command({
  pattern: "inori",
  fromMe: true,
  desc: "anime",
  type: "anime",
  }, async (m, message, match) => {
    var res = await axios.get('https://api.maher-zubair.tech/anime/inori');
    var img = res.data.url;
    await m.sendFromUrl(img);
    }); 
//astro-xd
command({
  pattern: "erza",
  fromMe: true,
  desc: "anime",
  type: "anime",
  }, async (m, message, match) => {
    var res = await axios.get('https://api.maher-zubair.tech/anime/erza');
    var img = res.data.url;
    await m.sendFromUrl(img);
    }); 
//astro-xd
command({
  pattern: "elaina",
  fromMe: true,
  desc: "anime",
  type: "anime",
  }, async (m, message, match) => {
    var res = await axios.get('https://api.maher-zubair.tech/anime/elaina');
    var img = res.data.url;
    await m.sendFromUrl(img);
    });
//astro-xd
command({
  pattern: "eba",
  fromMe: true,
  desc: "anime",
  type: "anime",
  }, async (m, message, match) => {
    var res = await axios.get('https://api.maher-zubair.tech/anime/eba');
    var img = res.data.url;
    await m.sendFromUrl(img);
    }); 
//astro-xd
command({
  pattern: "chihi",
  fromMe: true,
  desc: "anime",
  type: "anime",
  }, async (m, message, match) => {
    var res = await axios.get('https://api.maher-zubair.tech/anime/chiho');
    var img = res.data.url;
    await m.sendFromUrl(img);
    }); 
//astro-xd
command({
  pattern: "boruto",
  fromMe: true,
  desc: "anime",
  type: "anime",
  }, async (m, message, match) => {
    var res = await axios.get('https://api.maher-zubair.tech/anime/boruto');
    var img = res.data.url;
    await m.sendFromUrl(img);
    });
//astro-xd
command({
  pattern: "asuna",
  fromMe: true,
  desc: "anime",
  type: "anime",
  }, async (m, message, match) => {
    var res = await axios.get('https://api.maher-zubair.tech/anime/asuna');
    var img = res.data.url;
    await m.sendFromUrl(img);
    });
//astro-xd
command({
  pattern: "kaneki",
  fromMe: true,
  desc: "anime",
  type: "anime",
  }, async (m, message, match) => {
    var res = await axios.get('https://api.maher-zubair.tech/anime/kaneki');
    var img = res.data.url;
    await m.sendFromUrl(img);
    })
