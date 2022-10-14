export const validateEmail = (value: string, name: string) => {
  if (!value) {
    return "Required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) &&
    name == "Email"
  ) {
    return "Invalid Email Address. Please Enter Correct Format.";
  } else if (
    !/^[\w](?!.*?\.{2})[\w.]{1,28}[\w]$/i.test(value) &&
    name == "Instagram"
  ) {
    return "Invalid Instagram Username. Please Enter Correct Format.";
  } else if (
    !/^[\w](?!.*?\.{2})[\w.]{1,13}[\w]$/i.test(value) &&
    name == "Snapchat"
  ) {
    return "Invalid Snapchat Username. Please Enter Correct Format.";
  } else if (
    !/^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{2,24}$/i.test(value) &&
    name == "Tiktok"
  ) {
    return "Invalid Tiktok Username. Please Enter Correct Format.";
  } else if (!/^[a-zA-Z0-9_]{4,15}$/i.test(value) && name == "Twitter") {
    return "Invalid Twitter Username. Please Enter Correct Format.";
  } else if (
    !/^((http(s)?:\/\/([w]{3}\.)?linkedin\.com\/)(pub|in|profile)\/([a-zA-Z0-9-]{5,30})\/?)$/i.test(
      value
    ) &&
    name == "Linkedin"
  ) {
    return "Invalid Linkedin Link. Please Enter Correct Format.";
  } else if (
    !/^(?:(?:http|https):\/\/)?(?:www.|m.)?facebook.com\/(?!home.php)(?:(?:\w)*#!\/)?(?:pages\/)?(?:[?\w\-]*\/)?(?:profile.php\?id=(?=\d.*))?([\w\.-]+)$/i.test(
      value
    ) &&
    name == "Facebook"
  ) {
    return "Invalid Facebook Link. Please Enter Correct Format.";
  } else if (
    !/^^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$$/i.test(
      value
    ) &&
    name == "Youtube"
  ) {
    return "Invalid Youtube Link. Please Enter Correct Format.";
  } else if (
    !/^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})$/i.test(
      value
    ) &&
    name == "Pinterest"
  ) {
    return "Invalid Pinterest Link. Please Enter Correct Format.";
  } else if (!/^(#)?[a-zA-Z0-9][\w]{2,24}$/i.test(value) && name == "Twitch") {
    return "Invalid Twitch Username. Please Enter Correct Format.";
  } else if (
    !/^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})$/i.test(
      value
    ) &&
    name == "Onlyfans"
  ) {
    return "Invalid Onlyfans Link. Please Enter Correct Format.";
  } else if (!/^[0-9]{4,24}$/i.test(value) && name == "Whatsapp") {
    return "Invalid Contact Number.";
  } else if (!/^[0-9]{4,24}$/i.test(value) && name == "Text") {
    return "Invalid Contact Number.";
  } else if (!/^[0-9]{4,24}$/i.test(value) && name == "Call") {
    return "Invalid Contact Number.";
  } else if (!/^[0-9]{4,24}$/i.test(value) && name == "Contact Card") {
    return "Invalid Contact Number.";
  } else if (
    !/^[a-zA-Z0-9\s]+\,\s[a-zA-Z0-9\s]+\,\s[a-zA-Z\s]+\s[0-9]+\,\s[a-zA-Z\s]*$/i.test(
      value
    ) &&
    name == "Address"
  ) {
    return "Invalid Address.";
  } else if (
    !/^(https:\/\/open.spotify.com(.*))$/i.test(
      value
    ) &&
    name == "Spotify"
  ) {
    return "Invalid Spotify Link. Please Enter Correct Format.";
  } else if (
    !/^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})$/i.test(
      value
    ) &&
    name == "Apple Music"
  ) {
    return "Invalid Apple Music Link. Please Enter Correct Format.";
  } else if (
    !/^https?:\/\/(soundcloud\.com|snd\.sc)\/(.*)$/i.test(
      value
    ) &&
    name == "Sound cloud"
  ) {
    return "Invalid Sound Cloud Link. Please Enter Correct Format.";
  } else if (!/^paypal\.me\/.+$/i.test(value) && name == "Paypal") {
    return "Invalid Paypal Link. Please Enter Correct Format.";
  } else if (!/^[a-zA-Z0-9_-]{5,16}$/i.test(value) && name == "Venmo") {
    return "Invalid Venmo Username. Please Enter Correct Format.";
  } else if (!/^(?:\s*[#$][_a-z\d-]+)+$$/i.test(value) && name == "Cash App") {
    return "Invalid Cash Tag. Please Enter Correct Format.";
  } else if (
    !/^https?:\/\/([w]{3}\.)?(linktr.ee)\/(.*)$/i.test(
      value
    ) &&
    name == "Linktree"
  ) {
    return "Invalid Linktree Link. Please Enter Correct Format.";
  } else if (
    !/^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})$/i.test(
      value
    ) &&
    name == "Calendly"
  ) {
    return "Invalid Calendly Link. Please Enter Correct Format.";
  } else if (
    !/^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})$/i.test(
      value
    ) &&
    name == "Yelp"
  ) {
    return "Invalid Yelp Link. Please Enter Correct Format.";
  } else if (
    !/^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})$/i.test(
      value
    ) &&
    name == "Custom link"
  ) {
    return "Invalid Custom Link. Please Enter Correct Format.";
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
