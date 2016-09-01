# Compactify

A small firefox add-on that modifies links to reddit.com from reddit's
compact site so they also point to the compact site.

## Motivation

Reddit's old mobile site redirects most reddit.com links back to the compact
site. For user-submitted links, though, this isn't the case. This provides for
an inconsistent user experience that this addon tries to remedy.

## How it works

A normal reddit url can be made a compact-mode link by adding the `.compact`
tag to the end of the url. For permalinks to comments, however, the url often
already has a `?context` tag, and the `.compact` must come before it. This
addon sets itself up as an event-listener only when browsing in reddit's
compact site. It listens for `mousedown` events, and if they happen to be on a
non-compact reddit link element, it modifies the link so it points to the
compact site.