function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "res500", () => $a54b95d52ae3295a$export$c837572cfe3bb51);
$parcel$export(module.exports, "res200", () => $a54b95d52ae3295a$export$f1b2a327fa2c22d3);
$parcel$export(module.exports, "ssr404", () => $a54b95d52ae3295a$export$479425b9cf6d8de);
$parcel$export(module.exports, "res405", () => $a54b95d52ae3295a$export$f0ebfaff75d37cf9);
$parcel$export(module.exports, "res404", () => $a54b95d52ae3295a$export$4e794a523b53b9a7);
$parcel$export(module.exports, "ssrRedirect", () => $a54b95d52ae3295a$export$83a078795c8a5ac1);
$parcel$export(module.exports, "res403", () => $a54b95d52ae3295a$export$78f3cf4e0a7e1f43);
$parcel$export(module.exports, "res400", () => $a54b95d52ae3295a$export$29c2e71bcfeca1ac);
const $a54b95d52ae3295a$export$78f3cf4e0a7e1f43 = (res, message)=>res.status(403).send(message || "Unauthed")
;
const $a54b95d52ae3295a$export$29c2e71bcfeca1ac = (res, message)=>res.status(400).send(message || "Missing parameters")
;
const $a54b95d52ae3295a$export$c837572cfe3bb51 = (res, e)=>res.status(500).json({
        error: e
    })
;
const $a54b95d52ae3295a$export$f0ebfaff75d37cf9 = (res, message)=>res.status(405).send(message || "Method not allowed")
;
const $a54b95d52ae3295a$export$4e794a523b53b9a7 = (res, message)=>res.status(404).send(message || "Resource not found")
;
const $a54b95d52ae3295a$export$f1b2a327fa2c22d3 = (res, data)=>res.status(200).json(data || {
    })
;
const $a54b95d52ae3295a$export$83a078795c8a5ac1 = (destination)=>({
        redirect: {
            permanent: false,
            destination: destination
        }
    })
;
const $a54b95d52ae3295a$export$479425b9cf6d8de = {
    notFound: true
};


//# sourceMappingURL=index.js.map
