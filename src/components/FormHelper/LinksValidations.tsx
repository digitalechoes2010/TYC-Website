export const validateEmail = (value: string, name: string) => {
  if (!value) {
    return "Required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) &&
    name == "Email"
  ) {
    return "Invalid email address";
  } else if (
    !/^[\w](?!.*?\.{2})[\w.]{1,28}[\w]$/i.test(value) &&
    name == "Instagram"
  ) {
    return "Invalid instagram username";
  } else if (
    !/^[\w](?!.*?\.{2})[\w.]{1,13}[\w]$/i.test(value) &&
    name == "Snapchat"
  ) {
    return "Invalid Snapchat username";
  } else if (
    !/^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{2,24}$/i.test(value) &&
    name == "Tiktok"
  ) {
    return "Invalid Tiktok username";
  } else if (!/^[a-zA-Z0-9_]{4,15}$/i.test(value) && name == "Twitter") {
    return "Invalid Twitter username";
  } else if (
    !/^((http(s)?:\/\/([w]{3}\.)?linkedin\.com\/)(pub|in|profile)\/([a-zA-Z0-9-]{5,30})\/?)$/i.test(
      value
    ) &&
    name == "Linkedin"
  ) {
    return "Invalid Linkedin username";
  } else if (
    !/^(?:(?:http|https):\/\/)?(?:www.|m.)?facebook.com\/(?!home.php)(?:(?:\w)*#!\/)?(?:pages\/)?(?:[?\w\-]*\/)?(?:profile.php\?id=(?=\d.*))?([\w\.-]+)$/i.test(
      value
    ) &&
    name == "Facebook"
  ) {
    return "Invalid Facebook username";
  } else if (
    !/^^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$$/i.test(
      value
    ) &&
    name == "Youtube"
  ) {
    return "Invalid Youtube username";
  } else if (
    !/^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})$/i.test(
      value
    ) &&
    name == "Pinterest"
  ) {
    return "Invalid Pinterest username";
  } else if (!/^(#)?[a-zA-Z0-9][\w]{2,24}$/i.test(value) && name == "Twitch") {
    return "Invalid Twitch username";
  } else if (
    !/^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})$/i.test(
      value
    ) &&
    name == "Onlyfans"
  ) {
  } else if (!/^[0-9]{4,24}$/i.test(value) && name == "Whatsapp") {
    return "Invalid Whatsapp username";
  } else if (!/^[0-9]{4,24}$/i.test(value) && name == "Text") {
    return "Invalid Text link";
  } else if (!/^[0-9]{4,24}$/i.test(value) && name == "Call") {
    return "Invalid Number";
  } else if (!/^[0-9]{4,24}$/i.test(value) && name == "Contact Card") {
    return "Invalid Number";
  } else if (
    !/^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})$/i.test(
      value
    ) &&
    name == "Address"
  ) {
    return "Invalid Link";
  } else if (
    !/^(https:\/\/open.spotify.com(.*))$/i.test(
      value
    ) &&
    name == "Spotify"
  ) {
    return "Invalid Spotify link";
  } else if (
    !/^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})$/i.test(
      value
    ) &&
    name == "Apple Music"
  ) {
    return "Invalid Apple Music link";
  } else if (
    !/^https?:\/\/(soundcloud\.com|snd\.sc)\/(.*)$/i.test(
      value
    ) &&
    name == "Sound cloud"
  ) {
    return "Invalid Soundcloud link";
  } else if (!/^paypal\.me\/.+$/i.test(value) && name == "Paypal") {
    return "Invalid Paypal link";
  } else if (!/^[a-zA-Z0-9_-]{5,16}$/i.test(value) && name == "Venmo") {
  } else if (!/^(?:\s*[#$][_a-z\d-]+)+$$/i.test(value) && name == "Cash App") {
    return "Invalid CashTag";
  } else if (
    !/^https?:\/\/([w]{3}\.)?(linktr.ee)\/(.*)$/i.test(
      value
    ) &&
    name == "Linktree"
  ) {
    return "Invalid Linktree link";
  } else if (
    !/^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})$/i.test(
      value
    ) &&
    name == "Calendly"
  ) {
    return "Invalid Calendly link";
  } else if (
    !/^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})$/i.test(
      value
    ) &&
    name == "Yelp"
  ) {
    return "Invalid Yelp link";
  } else if (
    !/^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})$/i.test(
      value
    ) &&
    name == "Custom link"
  ) {
    return "Invalid link";
  } else {
    return "";
  }
};

export const validURLS = (str: any, title: any) => {
  if (title == "Instagram") {
    return "https://instagram.com/" + str;
  } else if (title == "Snapchat") {
    return "https://www.snapchat.com/add/" + str;
  } else if (title == "Twitter") {
    return "https://twitter.com/" + str;
  } else if (title == "Tiktok") {
    return "https://www.tiktok.com/" + str;
  } else if (title == "Twitch") {
    return "https://www.twitch.tv/" + str;
  } else if (title == "Whatsapp") {
    return "https://wa.me/" + str;
  } else if (title == "Cash App") {
    return "https://cash.app/" + str;
  } else if (title == "Venmo") {
    return "https://venmo.com/" + str;
  } else if (
    title == "Onlyfans" ||
    title == "Calendly" ||
    title == "Yelp" ||
    title == "Linktree" ||
    title == "Custom Link" ||
    title == "Address" ||
    title == "Pinterest" ||
    title == "Youtube" ||
    title == "Linkedin" ||
    title == "Spotify" ||
    title == "Apple Music" ||
    title == "Sound Cloud" ||
    title == "Facebook" ||
    title == "Paypal"
  ) {
    if (str.indexOf("http://") == 0 || str.indexOf("https://") == 0) {
      return str;
    } else {
      return "https://" + str;
    }
  }
};
