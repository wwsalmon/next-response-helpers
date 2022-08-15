function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "res403", () => $80bd448eb6ea085b$export$e7e51890a5f9651c);
$parcel$export(module.exports, "res400", () => $80bd448eb6ea085b$export$afbc1fdc383f9ea2);
$parcel$export(module.exports, "res500", () => $80bd448eb6ea085b$export$6317d51344e3e0ef);
$parcel$export(module.exports, "res405", () => $80bd448eb6ea085b$export$d9468181a51a3dcf);
$parcel$export(module.exports, "res404", () => $80bd448eb6ea085b$export$ab869b3759209d34);
$parcel$export(module.exports, "res200", () => $80bd448eb6ea085b$export$3913c8412cb9367);
$parcel$export(module.exports, "ssrRedirect", () => $80bd448eb6ea085b$export$716b763dc4a24da9);
$parcel$export(module.exports, "ssr404", () => $80bd448eb6ea085b$export$82de3e9dff96f5);
const $80bd448eb6ea085b$export$e7e51890a5f9651c = (res, message)=>res.status(403).send(message || "Unauthed");
const $80bd448eb6ea085b$export$afbc1fdc383f9ea2 = (res, message)=>res.status(400).send(message || "Missing parameters");
const $80bd448eb6ea085b$export$6317d51344e3e0ef = (res, e)=>res.status(500).json({
        error: e
    });
const $80bd448eb6ea085b$export$d9468181a51a3dcf = (res, message)=>res.status(405).send(message || "Method not allowed");
const $80bd448eb6ea085b$export$ab869b3759209d34 = (res, message)=>res.status(404).send(message || "Resource not found");
const $80bd448eb6ea085b$export$3913c8412cb9367 = (res, data)=>res.status(200).json(data || {});
const $80bd448eb6ea085b$export$716b763dc4a24da9 = (destination)=>({
        redirect: {
            permanent: false,
            destination: destination
        }
    });
const $80bd448eb6ea085b$export$82de3e9dff96f5 = {
    notFound: true
};


//# sourceMappingURL=index.js.map
