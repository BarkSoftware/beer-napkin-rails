# Beer Napkin
Wireframes, diagrams, mockups etc. for Github Issues.

Beer Napkin sets out to simplify "drawing" in a Github issue. Instead of attaching images or
signing up for a separate service, you just create a "napkin" that's automatically connected
to your Github Issue.  Collaborators will all have access to view/edit the napkin... for free!

# How it Works
Beer Napkin is two primary parts.
- Client side javascript making heavy usage of Canvas (fabricjs)
- Rails server app for persisting changes and serving up rendered images in Github

# Client Side
For now, the client is in the same repo as the server. Maybe we can move it if that doesn't
make sense someday?
I'm keeping my notes on the client design in [CLIENT_NOTES.md](CLIENT_NOTES.md) file.
We're relying heavily on Beer puns and [Fabricjs](http://fabricjs.com/)

# Server Side
This is the easy part.  Server will handle the following:
- Github Login (via Devise omniauth)
- Persistence of Napkin versions
- Rendering/serving of napkin png files
