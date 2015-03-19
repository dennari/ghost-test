var ghostPath = '../node_modules/ghost/core';
var _             = require('lodash'),
    uuid          = require('node-uuid'),
    globalUtils   = require(ghostPath+'/server/utils'),
    DataGenerator = {};

DataGenerator.Content = {
  posts: [
        {
            title: "HTML Ipsum",
            slug: "html-ipsum",
            markdown: "<h1>HTML Ipsum Presents</h1><p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href=\"#\">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p><h2>Header Level 2</h2><ol><li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li><li>Aliquam tincidunt mauris eu risus.</li></ol><blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote><h3>Header Level 3</h3><ul><li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li><li>Aliquam tincidunt mauris eu risus.</li></ul><pre><code>#header h1 a{display: block;width: 300px;height: 80px;}</code></pre>",
            published_at: new Date("2015-01-01")
        },
        {
            title: "Ghostly Kitchen Sink",
            slug: "ghostly-kitchen-sink",
            markdown: "<h1>HTML Ipsum Presents</h1><p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href=\"#\">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p><h2>Header Level 2</h2><ol><li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li><li>Aliquam tincidunt mauris eu risus.</li></ol><blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote><h3>Header Level 3</h3><ul><li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li><li>Aliquam tincidunt mauris eu risus.</li></ul><pre><code>#header h1 a{display: block;width: 300px;height: 80px;}</code></pre>",
            published_at: new Date("2015-01-02")
        },
        {
            title: "Short and Sweet",
            slug: "short-and-sweet",
            markdown: "## testing\n\nmctesters\n\n- test\n- line\n- items",
            html: "<h2 id=\"testing\">testing</h2>\n\n<p>mctesters</p>\n\n<ul>\n<li>test</li>\n<li>line</li>\n<li>items</li>\n</ul>",
            published_at: new Date("2015-01-03")
        },
        {
            title: "Not finished yet",
            slug: "unfinished",
            markdown: "<h1>HTML Ipsum Presents</h1><p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href=\"#\">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p><h2>Header Level 2</h2><ol><li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li><li>Aliquam tincidunt mauris eu risus.</li></ol><blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote><h3>Header Level 3</h3><ul><li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li><li>Aliquam tincidunt mauris eu risus.</li></ul><pre><code>#header h1 a{display: block;width: 300px;height: 80px;}</code></pre>",
            status: "draft"
        },
        {
            title: "Not so short, bit complex",
            slug: "not-so-short-bit-complex",
            markdown: "<p><nav><ul><li><a href=\"#nowhere\" title=\"Lorum ipsum dolor sit amet\">Lorem</a></li><li><a href=\"#nowhere\" title=\"Aliquam tincidunt mauris eu risus\">Aliquam</a></li><li><a href=\"#nowhere\" title=\"Morbi in sem quis dui placerat ornare\">Morbi</a></li><li><a href=\"#nowhere\" title=\"Praesent dapibus, neque id cursus faucibus\">Praesent</a></li><li><a href=\"#nowhere\" title=\"Pellentesque fermentum dolor\">Pellentesque</a></li></ul></nav><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p><table><thead><tr><th>1</th><th>2</th><th>3</th><th>4</th></tr></thead><tbody><tr><td>a</td><td>b</td><td>c</td><td>d</td></tr><tr><td>e</td><td>f</td><td>g</td><td>h</td></tr><tr><td>i</td><td>j</td><td>k</td><td>l</td></tr></tbody></table><dl><dt>Definition list</dt><dd>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</dd><dt>Lorem ipsum dolor sit amet</dt><dd>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</dd></dl><ul><li>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</li><li>Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</li><li>Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.</li><li>Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.</li></ul></p>"
        },
        {
            title: "This is a static page",
            slug: "static-page-test",
            markdown: "<h1>Static page test is what this is for.</h1><p>Hopefully you don't find it a bore.</p>",
            page: 1
        },
        {
            title: "This is a draft static page",
            slug: "static-page-draft",
            markdown: "<h1>Static page test is what this is for.</h1><p>Hopefully you don't find it a bore.</p>",
            page: 1,
            status: "draft"
        }
    ],


    tags: [
        {
            name: "kitchen sink",
            slug: "kitchen-sink"
        },
        {
            name: "bacon",
            slug: "bacon"
        },
        {
            name: "chorizo",
            slug: "chorizo"
        },
        {
            name: "pollo",
            slug: "pollo"
        },
        {
            name: "injection",
            slug: "injection"
        }
    ],
    // Password = Sl1m3rson
    users: [
        {
            "name": "Ville Väänänen",
            "slug": "ville-vaananen",
            "email": "ville.vaananen@zoined.com",
            "password": "$2a$10$.pZeeBE0gHXd0PTnbT/ph.GEKgd0Wd3q2pWna3ynTGBkPKnGIKZL6",
        },
        {
            "name": "Sasa Moilanen",
            "slug": "sasa-moilanen",
            "password": "$2a$10$.pZeeBE0gHXd0PTnbT/ph.GEKgd0Wd3q2pWna3ynTGBkPKnGIKZL6",
            "email": "sasa@zoined.com",
        },
        {
            "name": "Atte Roine",
            "slug": "atte-roine",
            "password": "$2a$10$.pZeeBE0gHXd0PTnbT/ph.GEKgd0Wd3q2pWna3ynTGBkPKnGIKZL6",                
            "email": "atte@zoined.com",
        }
    ],

    permissions: [
        {
            name: 'Browse posts',
            action_type: 'browse',
            object_type: 'post'
        }
    ],

    roles: [
        {
            name:             'Administrator',
            description:      'Administrators'
        },
        {
            name:             'Editor',
            description:      'Editors'
        },
        {
            name:             'Author',
            description:      'Authors'
        },
        {
            name:             'Owner',
            description:      'Blog Owner'
        }
    ],

    apps: [
    ],

    app_fields: [
    ],

    app_settings: [
    ]
};

DataGenerator.forKnex = (function () {
    var posts,
        tags,
        posts_tags,
        apps,
        app_fields,
        roles,
        users,
        roles_users,
        clients;

    function createBasic(overrides) {
        return _.defaults(overrides, {
            uuid: uuid.v4(),
            created_by: 1,
            created_at: new Date(),
            updated_by: 1,
            updated_at: new Date()
        });
    }

    function createPost(overrides) {
        return _.defaults(overrides, {
            uuid: uuid.v4(),
            status: 'published',
            html: overrides.markdown,
            language: 'en_US',
            featured: true,
            page: false,
            author_id: 1,
            updated_at: new Date(),
            updated_by: 1,
            created_at: new Date(),
            created_by: 1,
            published_at: new Date(),
            published_by: 1
        });
    }

    function createUser(overrides) {
        return _.defaults(overrides, {
            uuid: uuid.v4(),
            status: 'active',
            created_by: 1,
            created_at: new Date()
        });
    }


    function createPostsTags(postId, tagId) {
        return {
            post_id: postId,
            tag_id: tagId
        };
    }

    function createToken(overrides) {
        return _.defaults(overrides, {
            token: uuid.v4(),
            client_id: 1,
            expires: Date.now() + globalUtils.ONE_DAY_MS
        });
    }

    roles = [
        createBasic(DataGenerator.Content.roles[0]),
        createBasic(DataGenerator.Content.roles[1]),
        createBasic(DataGenerator.Content.roles[2]),
        createBasic(DataGenerator.Content.roles[3])
    ];

    users = [
        createUser(DataGenerator.Content.users[0]),
        createUser(DataGenerator.Content.users[1]),
        createUser(DataGenerator.Content.users[2]),
    ];

    clients = [
        createBasic({name: 'Ghost Admin', slug: 'ghost-admin', secret: 'not_available'})
    ];

    roles_users = [
        {user_id: 1, role_id: 4},
        {user_id: 2, role_id: 1},
        {user_id: 3, role_id: 1}
    ];

    posts = [
        createPost(DataGenerator.Content.posts[0]),
        createPost(DataGenerator.Content.posts[1]),
        createPost(DataGenerator.Content.posts[2]),
        createPost(DataGenerator.Content.posts[3]),
        createPost(DataGenerator.Content.posts[4]),
        createPost(DataGenerator.Content.posts[5]),
        createPost(DataGenerator.Content.posts[6])
    ];

    tags = [
        createBasic(DataGenerator.Content.tags[0]),
        createBasic(DataGenerator.Content.tags[1]),
        createBasic(DataGenerator.Content.tags[2]),
        createBasic(DataGenerator.Content.tags[3]),
        createBasic(DataGenerator.Content.tags[4])
    ];

    posts_tags = [
        {post_id: 1, tag_id: 1},
        {post_id: 1, tag_id: 2},
        {post_id: 2, tag_id: 1},
        {post_id: 2, tag_id: 2},
        {post_id: 3, tag_id: 3},
        {post_id: 4, tag_id: 4}
    ];
    return {
        createPost: createPost,
        createTag: createBasic,
        createUser: createUser,
        createBasic: createBasic,
        createRole: createBasic,
        createPermission: createBasic,
        createPostsTags: createPostsTags,
        createToken: createToken,

        roles: roles,
        users: users,
        roles_users: roles_users,
        clients: clients,
        posts: posts,
        tags: tags,
        posts_tags: posts_tags

    };
}());

DataGenerator.forModel = (function () {
    var posts,
        tags,
        users,
        roles;

    users = _.map(DataGenerator.Content.users, function (user) {
        user = _.pick(user, 'name', 'email');

        return _.defaults({
            password: 'Sl1m3rson'
        }, user);
    });

    roles = _.map(DataGenerator.Content.roles, function (role, id) {
        return _.extend({}, role, {id: id + 1});
    });

    return {
        users: users,
        roles: roles
    };
}());

module.exports = DataGenerator;
