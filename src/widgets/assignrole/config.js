module.exports = {
    rules: {
        '702490622409310239': { // <- Message ID for Rules role member
            channelId: '460242312728150037',
            isUnique: true,
            emojiRoleMap: {
                '✅': ['700442003883950167']
            }
        },
        '704711053245677608': { // <- Message ID for Games roles
            channelId: '704650741259698196',
            isUnique: false,
            emojiRoleMap: {
                '704676026764230939': ['704649656214224936'], // rainbow 6
                '704682677294333953': ['704684962833760366'], // csgo
                '704684697837633607': ['704685065539551255'], // valorant
                '704684688752640010': ['704685104605167616'], // rocketleague
                '704720654250803252': ['704720343318790234'], // fortnite
                '704720654250803252': ['704720343318790234'], // fifa
                //'EMOJI_2': ['ROLE_2_ID'],
                //'EMOJI_3': ['ROLE_3_ID', 'ROLE_4_ID'],
                // ...Add as many emoji-role mappings as you want.
            }
        },
        '704725638430326814': { // <- Message ID for Games roles
            channelId: '704650741259698196',
            isUnique: false,
            emojiRoleMap: {
                '🔔': ['704727910069829673'], // dringdring
                '704726681436553286': ['704727996996517980'], // twitch
                '🏆': ['704727943942897705'], // results
                //'EMOJI_2': ['ROLE_2_ID'],
                //'EMOJI_3': ['ROLE_3_ID', 'ROLE_4_ID'],
                // ...Add as many emoji-role mappings as you want.
            }
        },
    }
};
