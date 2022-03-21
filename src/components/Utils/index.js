export function setWH(url, arg){
    return url.replace(/w\.h/, arg);
}

export function actorFilter(data){
    const newlist = data.map(item => item.name);
    return newlist.join(" ");
}