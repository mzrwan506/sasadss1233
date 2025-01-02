const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// قوائم الأسلحة حسب النوع
const weapons = {
    SMG: [
        "MP5 مع Rapid Fire وSuppressor",
        "UMP-45 مع Extended Mags وGrip",
        "P90 مع Red Dot وFMJ",
        "Vector مع Silencer وHolographic Sight",
        "PP-2000 مع Akimbo"
    ],
    AssaultRifles: [
        "AK-47 مع Red Dot وSilencer",
        "M4A1 مع ACOG Scope وGrenade Launcher",
        "FAL مع Thermal وSuppressor",
        "SCAR-H مع Holographic Sight وExtended Mags",
        "TAR-21 مع FMJ وSilencer"
    ],
    Snipers: [
        "Intervention مع FMJ وThermal",
        "Barrett .50cal مع Silencer وExtended Mags",
        "WA2000 مع ACOG Scope وFMJ",
        "M21 EBR مع Red Dot وSuppressor"
    ],
    Shotguns: [
        "SPAS-12 مع Grip وSuppressor",
        "AA-12 مع Extended Mags وRed Dot",
        "Model 1887 مع Akimbo وFMJ",
        "Striker مع Silencer وExtended Mags"
    ]
};

client.once('ready', () => {
    console.log(`✅ تم تشغيل البوت بنجاح!`);
});

client.on('messageCreate', message => {
    const content = message.content.toLowerCase();

    // إذا طلب المستخدم قائمة أسلحة بناءً على النوع
    if (content.startsWith("!سلاح")) {
        const type = content.split(" ")[1]; // استخراج النوع من الأمر
        if (weapons[type]) {
            const randomWeapon = weapons[type][Math.floor(Math.random() * weapons[type].length)];
            message.reply(`🎯 نوع السلاح (${type.toUpperCase()}): ${randomWeapon}`);
        } else {
            message.reply("⚠️ النوع غير موجود! الأنواع المتوفرة: SMG, AssaultRifles, Snipers, Shotguns.");
        }
    }

    // إذا طلب المستخدم عرض جميع الأنواع المتوفرة
    if (content === "!الأنواع") {
        const availableTypes = Object.keys(weapons).join(", ");
        message.reply(`📜 الأنواع المتوفرة: ${availableTypes}`);
    }
});

client.login('YOUR_BOT_TOKEN_HERE');
