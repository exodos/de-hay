import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const res = [
    {
      id: 1,
      title: "Smart Identity",
      url: "smart-identity",
      subMenu: [
        {
          id: 11,
          title: "ZKBio Time Api",
          url: "/zkbio-time-api",
          icon: "BiTimer",
        },
        {
          id: 12,
          title: "Biometrics Module SDK",
          url: "/biometrics-module-sdk",
          icon: "BsFingerprint",
        },
        {
          id: 13,
          title: "ZKBio CVSecurity Api",
          url: "/zkbio-cvsecurity-api",
          icon: "GrShieldSecurity",
        },
        {
          id: 14,
          title: "Biometrics Module",
          url: "/biometrics-module",
          icon: "GiFingerPrint",
        },
        {
          id: 15,
          title: "Biometrics Scanner",
          url: "/biometrics-scanner",
          icon: "GrFingerPrint",
        },
        {
          id: 16,
          title: "Biometrics Terminal",
          url: "/biometrics-terminal",
          icon: "BsFillTerminalFill",
        },
        {
          id: 17,
          title: "Multi-purpose Intergration",
          url: "/multi-purpose-integeration",
          icon: "VscTasklist",
        },
      ],
    },
    {
      id: 2,
      title: "Smart Entrance Control",
      url: "/smart-entrance-control",
      subMenu: [
        {
          id: 21,
          title: "Body Temperature Detection",
          url: "/body-temperature-detection",
          icon: "FaTemperatureHigh",
          lastMenu: [
            {
              id: 211,
              title: "Entrance Control",
              url: "/entrance-Control",
            },
            {
              id: 212,
              title: "Access Control",
              url: "/Access-control",
            },
            {
              id: 213,
              title: "Thermal Camera",
              url: "/thermal-camera",
            },
          ],
        },
        {
          id: 22,
          title: "Access Control",
          url: "/access-control",
          icon: "AiFillControl",
          lastMenu: [
            {
              id: 221,
              title: "Standalone Device",
              url: "/standalone-device",
            },
            {
              id: 222,
              title: "Control Panel",
              url: "/control-panel",
            },
            {
              id: 223,
              title: "Reader",
              url: "/reader",
            },
            {
              id: 224,
              title: "Accessory",
              url: "/accessory",
            },
            {
              id: 224,
              title: "Software",
              url: "/software",
            },
          ],
        },
        {
          id: 23,
          title: "Video Survillance",
          url: "/video-survillance",
          icon: "BsFillCameraVideoFill",
          lastMenu: [
            {
              id: 231,
              title: "IP PTZ",
              url: "/ip-ptz",
            },
            {
              id: 232,
              title: "IOT and USB Product Series",
              url: "/iot-and-usb-product-series",
            },
            {
              id: 233,
              title: "POE NVR Kits",
              url: "/poe-nvr-kits",
            },
            {
              id: 234,
              title: "Network Camera",
              url: "/network-camera",
            },
            {
              id: 235,
              title: "HD Analog Camera",
              url: "/hd-analog-camera",
            },
          ],
        },
        {
          id: 24,
          title: "Smart Security Gate",
          url: "/smart-security-gate",
          icon: "GiSecurityGate",
          lastMenu: [
            {
              id: 241,
              title: "Tripod Turnstile",
              url: "/tripod-turnstile",
            },
            {
              id: 242,
              title: "Flap Barrier",
              url: "/flap-barrier",
            },
            {
              id: 243,
              title: "Swing Barrier",
              url: "/swing-barrier",
            },
            {
              id: 244,
              title: "Full Height Turnstile",
              url: "/full-height-turnstile",
            },
            {
              id: 245,
              title: "Optical Turnstile",
              url: "/optical-turnstile",
            },
          ],
        },
        {
          id: 25,
          title: "Smart Vehicle & Inspection",
          url: "/smart-vehicle-and-inspection",
          icon: "BsCarFront",
          lastMenu: [
            {
              id: 251,
              title: "Parking Barrier",
              url: "/parking-barrier",
            },
            {
              id: 252,
              title: "LPR",
              url: "/lpr",
            },
            {
              id: 253,
              title: "Long Distance Reader",
              url: "/long-distance-reader",
            },
            {
              id: 254,
              title: "Parking Lock",
              url: "/parking-lock",
            },
            {
              id: 255,
              title: "Video Parking Guidance System",
              url: "/video-parking-guidance-system",
            },
          ],
        },
        {
          id: 26,
          title: "Security Inspection",
          url: "/security-inspection",
          icon: "AiFillSecurityScan",
          lastMenu: [
            {
              id: 261,
              title: "Vehicle Security",
              url: "/vehicle-security",
            },
            {
              id: 262,
              title: "Walk Through Metal Detector",
              url: "/walk-through-metal-detector",
            },
            {
              id: 263,
              title: "Hand Held Metal Detector",
              url: "/hand-held-metal-detector",
            },
            {
              id: 264,
              title: "Ferrous Contraband and Smartphone",
              url: "/ferrous-contraband-and-martphone",
            },
            {
              id: 265,
              title: "Detector",
              url: "/detector",
            },
            {
              id: 266,
              title: "X-Ray Scanner",
              url: "/x-ray-scanner",
            },
          ],
        },
        {
          id: 27,
          title: "Smart Home Security",
          url: "/smart-home-security",
          icon: "BiCameraHome",
          lastMenu: [
            {
              id: 271,
              title: "IoT Smart Home",
              url: "/iot-smart-home",
            },
            {
              id: 272,
              title: "Residential Lock",
              url: "/residential-lock",
            },
            {
              id: 273,
              title: "Hotel Lock",
              url: "/hotel-lock",
            },
            {
              id: 274,
              title: "Other Lock",
              url: "/other-lock",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Smart Office",
      url: "/smart-office",
      subMenu: [
        {
          id: 31,
          title: "Time Attendance",
          icon: "GiTimeBomb",
          lastMenu: [
            {
              id: 311,
              title: "Face",
              url: "/face",
            },
            {
              id: 312,
              title: "Fingerprint",
              url: "/fingerprint",
            },
            {
              id: 313,
              title: "Hybrid Biometrics",
              url: "/hybrid-biometrics",
            },
            {
              id: 314,
              title: "RFID",
              url: "/rfid",
            },
            {
              id: 315,
              title: "Portable Device",
              url: "/portable-device",
            },
          ],
        },
        {
          id: 32,
          title: "Intelligent Commerce",
          icon: "GiTrade",
          lastMenu: [
            {
              id: 321,
              title: "EAS System",
              url: "/eas-system",
            },
            {
              id: 322,
              title: "Consumption Machine",
              url: "/consumption-machine",
            },
            {
              id: 323,
              title: "Commercial Display",
              url: "/commercial-display",
            },
            {
              id: 324,
              title: "Software",
              url: "/software",
            },
            {
              id: 325,
              title: "POS Terminal",
              url: "/pos-terminal",
            },
          ],
        },
      ],
    },
    {
      id: 4,
      title: "Solution",
      url: "/solution",
      subMenu: [
        {
          id: 41,
          title: "Smart Identity",
          img: "/product-image/smart-identity.png",
          url: "/smart-identity",
        },
        {
          id: 42,
          title: "Smart Entrance Control",
          img: "/product-image/smart-entrance.png",
          url: "/smart-entrance-control",
        },
        {
          id: 43,
          title: "Smart Office",
          img: "/product-image/smart-office.png",
          url: "/smart-office",
        },
      ],
    },
    {
      id: 5,
      title: "Services",
      url: "/dservices",
      subMenu: [
        {
          id: 51,
          title: "Networking",
          url: "/networking",
          img: "/product-image/networking.png",
        },
        {
          id: 52,
          title: "Security",
          url: "/security",
          img: "/product-image/security.png",
        },
        {
          id: 53,
          title: "Software Development",
          url: "/software-development",
          img: "/product-image/web-development.png",
        },
      ],
    },
    {
      id: 6,
      title: "Support",
      url: "/support",
      subMenu: [
        {
          id: 61,
          title: "Contact Us",
          url: "/products",
          icon: "AiOutlineContacts",
        },
        {
          id: 62,
          title: "About",
          url: "/about-us",
          icon: "SiAboutdotme",
        },
        {
          id: 63,
          title: "Partner",
          url: "/partners",
          icon: "FcCollaboration",
        },
      ],
    },
    {
      id: 7,
      title: "Green Label",
      url: "/green-label",
      subMenu: [
        {
          id: 71,
          title: "Time Attendance",
          icon: "GiTimeBomb",
          lastMenu: [
            {
              id: 711,
              title: "Standalone Device",
              url: "/standalone-device",
            },
          ],
        },
        {
          id: 72,
          title: "Access Control",
          icon: "SiOpenaccess",
          lastMenu: [
            {
              id: 721,
              title: "Standalone Device",
              url: "/standalone-device",
            },
            {
              id: 722,
              title: "Control Panel",
              url: "/control-panel",
            },
            {
              id: 723,
              title: "Reader",
              url: "/reader",
            },
            {
              id: 724,
              title: "Accessory",
              url: "/accessory",
            },
          ],
        },
      ],
    },
    {
      id: 8,
      title: "Armatura",
      url: "/armatura",
      subMenu: [
        {
          id: 81,
          title: "Reader",
          icon: "BiBarcodeReader",
          lastMenu: [
            {
              id: 811,
              title: "Explore Series",
              url: "/explore-series",
            },
          ],
        },
        {
          id: 82,
          title: "Controller",
          icon: "CgController",
          lastMenu: [
            {
              id: 821,
              title: "AHEB Series",
              url: "/aheb-series",
            },
            {
              id: 822,
              title: "AHDU Series",
              url: "/ahdu-series",
            },
            {
              id: 823,
              title: "AHSC Series",
              url: "/ahsc-series",
            },
          ],
        },
      ],
    },

    // { title: "Technology", url: "#" },
  ];

  return NextResponse.json({ res });
}
