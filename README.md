# Fnord

Social Paramedia Platform

https://relaxed-swartz-19230e.netlify.app/

- Your anti misapperception portal
- Social Paramedia
- Fluxanon Hub
- Media Massager
- Act of Information Freedom
- You don’t know what doesn’t hurt you


## Project Description

Fnord [sic](https://en.wikipedia.org/wiki/Principia_Discordia) seeks the liberation of information through recontextualization. The aim is to subvert the exploitative norms of social media while simultaneously providing a tool for the cooperative generation of novel texts. Fluxus media artist [Yasunao Tone](https://quod.lib.umich.edu/cgi/p/pod/dod-idx/yasunao-tone-and-mp3deviation.pdf?c=icmc;idno=bbp2372.2010.046) used the term “paramedia” to describe his work, the goal of which was to dismantle media formats to find new exciting forms. In Fnord the Paramedia concept is extended to the social media paradigm. 

Users are prompted to make posts expressing their thoughts under a pseudonym. However, when displayed, the contents of these posts are redacted. In this way users are able to freely express themselves without fear of reproach. The other option for engagement takes two parts: users can select previous posts to be added to the "void cloud." Once the cloud reaches terminal capacity a new, fully-visible post is generated from an agglomeration of the material added to the cloud. All posts can be added to the cloud or deleted. 

Fnord also provides tools for processing texts with the methods used by Dadaists and later popularized by William Burroughs and Bryan Gysin. Tools acceptes up to two texts entered by the user and processes them into one new text. The new congolmerate text serves as the starting point for novel concepts or approaches.

## Wireframes and Component Hierarchy

https://whimsical.com/fnord-HJHWbWrjqYsGQDxWD59vsn

## API and Data Sample

https://api.airtable.com/v0/appMdfGQRBqQW1C0k/Table%201?api_key=


```
          {
            "records": [
                {
                    "id": "rec0gJDlBfcmQJY17",
                    "fields": {},
                    "createdTime": "2021-10-22T00:05:46.000Z"
                },
                {
                    "id": "recU3qFgFqxxh8Xhz",
                    "fields": {
                        "title": "my controversial opinion",
                        "body": "All news is not real. The government isn't real. Money isn't real. My identity is a fabrication. Everything in our lives is an illusion constructed from pure chaos. There is no order other than that which is fabricated by the experience of human consciousness. There is no escaping this.",
                        "author": "Pseudonymous Rips"
                    },
                    "createdTime": "2021-10-22T00:05:46.000Z"
                },
                {
                    "id": "recW0UqSW8GZiXk8s",
                    "fields": {
                        "body": "Psycho crazy mental hospital moon. Witch ashes eyeball undead, in bury burn hell flames. Screams creaking tension kettle our exorcist. Trapped flesh grotesque squeal, bloodcurdling chilling hair-raising spooky hazardous daring. In horrifying, fear is gnarled murder, ominous eerie Serial killer sinister, wit.\n\nSick chilling agony shaking heart pumping. Bloodcurdling decomposed zombie in virus scared cat Michael Myers worms. Children creepy deranged, ashes a killer a, monster mental hospital. Demons in fallen angel non terror decomposed rotten teeth. Flames at crazy slicing with murderer gore. scream.\n\n",
                        "title": "void",
                        "author": "void"
                    },
                    "createdTime": "2021-10-22T00:05:46.000Z"
                }
            ]
          }
```

## MVP

- Functioning React app with 6 components
  - root: title, nav, and post feed
  - why: inspiration and related links
  - how: how posting and void posting works
  - post: write to api and render posts to root
  - tools: text scrambler and text folder place holders for added functionality later

## POST-MVP

- void posting: rendering to root from void cloud
- Functioning tools: scrambler, folder, random wikipedia api mesher
- active abyss page rendering character limited conglomerated mega-post from api
- active library feature to save favorite void posts

## Timeframes

| Component                 | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------- | :------: | :------------: | :-----------: | :---------: |
| Proposal                  |    H     |      2hrs      |     5hrs      |    5hrs     |
| Airtable setup            |    H     |      1hrs      |      .5hr     |     .5hr    |
| plan/pseudo-code          |    H     |      1hrs      |      1hr      |     1hr     |
| react structure           |    H     |      3hrs      |      3.25hr   |    3.25hr   |
| post logic                |    H     |      7hrs      |      12.5hr   |     12.5hr  |
| delete logic              |    H     |      2hrs      |      1hr      |     1hr     |
| tools logic               |    H     |      3hrs      |      3hr      |     3hr     |
| info pages content        |    H     |      3hrs      |      3hr      |     3hr     |
| css styling               |    H     |      7hrs      |     12hr      |    12hr     |
| Total                     |    H     |      30hrs     |               |     41.25hr |
