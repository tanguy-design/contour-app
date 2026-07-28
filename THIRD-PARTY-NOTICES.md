# Third-Party Notices

## APCA (readability)

Contour's readability labels are derived from **APCA (Accessible Perceptual
Contrast Algorithm)**, created by Andrew Somers / Myndex™ and licensed to the
W3C/AGWG for web-content accessibility. Contour independently implements an
**APCA-derived** Lc computation (`src/tools/palette/readability.ts`): it uses
the published constant set (`0.0.98G-4g`) but omits APCA's reference output
stage (the low-contrast clip and offset), so its values are adapted for
Contour's own **advisory** tiers and are not canonical APCA output. It does not
vendor the `apca-w3` package and makes no claim of WCAG or APCA conformance.

- Source and license: https://github.com/Myndex/apca-w3 (see its `LICENSE.md`).
- "APCA", "SAPC", and "SACAM" are terms of Myndex™, used here to credit the
  algorithm, not to assert endorsement or certification.

---

## Color-vision-deficiency simulation

Contour's "Seen with" simulation is a hybrid of the two standard models, each
used where it is strongest (`src/tools/palette/components/cvd.ts`; only
published constants are reused, no third-party code is vendored):

- **Dichromacies** (protanopia, deuteranopia, tritanopia): **Brettel, Viénot
  & Mollon (1997), "Computerized simulation of color appearance for
  dichromats"** (JOSA A 14(10)), the piecewise two-half-plane projection,
  more faithful than any single matrix and the only credible model for
  tritanopia. The parameters are the linear-sRGB precomposition published by
  **libDaltonLens** (public domain / Unlicense,
  https://github.com/DaltonLens/libDaltonLens), which uses the sRGB standard
  for RGB ↔ XYZ and **Smith & Pokorny (1975)** for XYZ ↔ LMS.
- **Anomalous trichromacies** (protanomaly, deuteranomaly, tritanomaly):
  **Machado, Oliveira & Fernandes (2009), "A Physiologically-based Model for
  Simulation of Color Vision Deficiency"** (IEEE TVCG 15(6)) at severity 0.6,
  a representative mid-severity. Machado's model is the one that offers a
  severity scale. This is the model Chrome and Firefox DevTools apply to all
  conditions; Contour's dichromacy views therefore differ from DevTools by
  design.

One further divergence, made so the simulation fits Contour's P3-canonical
pipeline: both models are defined for **sRGB primaries**, and DevTools apply
them to colors already clamped to sRGB. Contour instead keeps the color
**unclamped** through the linear transform (out-of-sRGB channels ride through,
coherently, because the transforms are linear) and gamut-maps once at the
end, in Display P3. Wide-gamut swatches keep their P3 extension in the
simulated view instead of being silently narrowed to sRGB first; the
trade-off, stated plainly, is that wide-gamut input is a **linear
extrapolation** of models derived from sRGB-primaries stimuli. The simulation
is **advisory**: approximate by nature, framed in-app as something to
explore and then verify with real tools and real people.

- Paper: https://www.inf.ufrgs.br/~oliveira/pubs_files/CVD_Simulation/CVD_Simulation.html

---

## Bundled runtime code

Four packages ship inside the built JavaScript. Their required notices are
reproduced in full below.

| Package | Copyright | License |
|---|---|---|
| [react](https://github.com/facebook/react) | © Meta Platforms, Inc. and affiliates | MIT |
| [react-dom](https://github.com/facebook/react) | © Meta Platforms, Inc. and affiliates | MIT |
| [scheduler](https://github.com/facebook/react) | © Meta Platforms, Inc. and affiliates | MIT |
| [lucide-react](https://github.com/lucide-icons/lucide) | © 2026 Lucide Icons and Contributors | ISC |

**MIT License** (react, react-dom, scheduler)

> Permission is hereby granted, free of charge, to any person obtaining a copy of
> this software and associated documentation files (the "Software"), to deal in
> the Software without restriction, including without limitation the rights to
> use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
> of the Software, and to permit persons to whom the Software is furnished to do
> so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

**ISC License** (lucide-react)

> Permission to use, copy, modify, and/or distribute this software for any
> purpose with or without fee is hereby granted, provided that the above
> copyright notice and this permission notice appear in all copies.
>
> THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
> REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
> AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
> INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
> LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
> OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
> PERFORMANCE OF THIS SOFTWARE.

---

## Third-party script

[Umami](https://umami.is) (MIT), loaded at runtime from `cloud.umami.is` for
anonymous, cookieless usage measurement. It is not bundled: the browser fetches
it, and a visitor who blocks it loses nothing but the measurement.

---

## Image formats

Contour reads the structure of PNG, JPEG, WebP, HEIC and AVIF files, and hands
the picture itself to the browser to decode. **It bundles no image codec.**
Decoding HEVC (inside HEIC) and AV1 (inside AVIF) is done by the user's browser
and operating system under their own licenses, exactly as it is for any page
that displays such an image. The container parsers are original work written
from knowledge of the ISO base media and HEIF formats; no specification text is
reproduced.

---

## Fonts

Contour self-hosts two typefaces, both under the **SIL Open Font License
1.1**. The full license text ships beside the woff2 files in the app's build.

| Typeface | Copyright | License |
|---|---|---|
| [Inter](https://github.com/rsms/inter) | © 2020 The Inter Project Authors (Rasmus Andersson) | OFL-1.1 |
| [Yeseva One](https://fonts.google.com/specimen/Yeseva+One) | © 2012 The Yeseva One Project Authors (Jovanny Lemonad), Reserved Font Name "Yeseva" | OFL-1.1 |

---

## Color-suggestion corpus

Contour's "Worth exploring" color suggestions draw on the third-party palette
corpora listed below. Only the openly-licensed **color data** is reused. The raw
source rows and the criteria each one was accepted or refused under live with
the source, in the private repository.

Every source is licensed **MIT** or **CC0-1.0**. The work, film, place, and
species names are used **nominatively**, to identify what a palette is drawn
from. Contour reuses no logos, images, or marks and implies no affiliation with
or endorsement by any rights holder.

### Licenses

#### CC0-1.0 (public-domain dedication)

CC0 imposes no conditions; these are credited as a courtesy:
[MetBrewer](https://github.com/BlakeRMills/MetBrewer),
[MetroBrewer](https://github.com/juliagdealedo/MetroBrewer),
[nationalparkcolors](https://github.com/katiejolly/nationalparkcolors),
[sunsets](https://github.com/mccarthy-m-g/sunsets),
[ggpomological](https://github.com/gadenbuie/ggpomological).

#### MIT License

Every other source is under the MIT License. Its text is identical in form for
each package; the copyright holder is listed per row in the tables below.

```
MIT License

Copyright (c) <year> <holder>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### Sources

Grouped by the **subject each palette is drawn from**. These are peer categories
by medium and domain, not a ranking: film, games, and music are no less art
than painting; they are simply different sources.

#### Human works

##### Painting & visual art

| Source | Drawn from | License | Copyright |
|---|---|---|---|
| [MetBrewer](https://github.com/BlakeRMills/MetBrewer) | Works at the Metropolitan Museum of Art | CC0-1.0 | Blake Robert Mills |
| [lisa / ColorLisa](https://github.com/tyluRp/lisa) | Master artists' signature palettes (curated at [ColorLisa](https://colorlisa.com) by Ryan McGuire) | MIT | © 2019 Tyler Littlefield |
| [MoMAColors](https://github.com/BlakeRMills/MoMAColors) | Works at the Museum of Modern Art | MIT | © 2023 Blake Robert Mills |
| [vangogh](https://github.com/cherylisabella/vangogh) | Van Gogh paintings | MIT | © 2022 Cheryl Isabella |
| [IslamicArt](https://github.com/lambdamoses/IslamicArt) | Islamic art, manuscripts & architecture | MIT | © 2019 Lambda Moses |
| [hermitage](https://github.com/dudukina/hermitage) | Paintings in the Hermitage Museum | MIT | © 2021 Elena Dudukina |
| [rothko](https://github.com/mmerrittsmith/rothko) | Mark Rothko paintings | MIT | © 2020 Merritt Smith |
| [morris](https://github.com/CSHoggard/morris) | William Morris textiles (Strawberry Thief, Acanthus…) | MIT | © 2021 C. S. Hoggard |
| [harlem](https://github.com/sdhutchins/harlem) | Harlem Renaissance artworks (Lawrence, Bearden, Douglas, Motley…) | MIT | © 2023–2025 Shaurita D. Hutchins |
| [albumcolors](https://github.com/infowetrust/albumcolors) | Émile Cheysson's _Album de Statistique Graphique_, 19th-c. statistical plates (via the David Rumsey Map Collection) | MIT | © 2019 RJ Andrews |
| [ggpomological](https://github.com/gadenbuie/ggpomological) | USDA Pomological Watercolor Collection | CC0-1.0 | Garrick Aden-Buie |

##### Film, TV & animation

| Source | Drawn from | License | Copyright |
|---|---|---|---|
| [wesanderson](https://github.com/karthik/wesanderson) | Wes Anderson films | MIT | © 2022 Karthik Ram |
| [ghibli](https://github.com/ewenme/ghibli) | Studio Ghibli films (medium variants) | MIT | © 2020 Ewen Henderson |
| [tarantino](https://github.com/rexarski/tarantino) | Quentin Tarantino films | MIT | © 2021 Rui Qiu |
| [Rdune](https://github.com/nvietto/Rdune) | The Dune films (Denis Villeneuve) | MIT | © 2024 Rdune authors |
| [alphonse](https://github.com/kaylinratner/alphonse) | Anime series & characters | MIT | © 2021 Kaylin Ratner |
| [lotr](https://github.com/chaycereed/lotr) | The Lord of the Rings (locations & characters) | MIT | © 2025 Chayce Reed |
| [blueycolors](https://github.com/ekholme/blueycolors) | Bluey (animated series), by character | MIT | © 2024 blueycolors authors (Eric Ekholm) |

##### Video games

| Source | Drawn from | License | Copyright |
|---|---|---|---|
| [joycon](https://github.com/jrcalabrese/joycon) | Nintendo games (Mario, Zelda, Animal Crossing…) | MIT | © 2021 J. R. Calabrese |
| [scale_colour_genshin](https://github.com/xieguigang/scale_colour_genshin) | Genshin Impact characters, by character | MIT | © 2017 GCModeller Cloud Platform |

##### Music

| Source | Drawn from | License | Copyright |
|---|---|---|---|
| [shakiRa](https://github.com/camartinezbu/shakiRa) | Shakira albums | MIT | © 2021 Camilo Martínez |
| [tayloRswift](https://github.com/asteves/tayloRswift) | Taylor Swift albums | MIT | © 2021 tayloRswift authors |
| [metallicaRt](https://github.com/johnmackintosh/metallicaRt) | Metallica albums | MIT | © 2020 John MacKintosh |
| [PeaRlJam](https://github.com/jorgeluis8ar/PeaRlJam) | Pearl Jam albums | MIT | © 2021 Jorge Luis Ochoa Rincón |
| [fromthebottom](https://github.com/bradweiner/fromthebottom) | Phish albums | MIT | © 2021 Brad Weiner |
| [ggroove](https://github.com/danovando/ggroove) | Album covers (Radiohead) | MIT | © 2020 ggroove authors (Daniel Ovando) |

##### Everyday objects & products

| Source | Drawn from | License | Copyright |
|---|---|---|---|
| [crayons](https://github.com/christopherkenny/crayons) | Crayola crayon packs, specialty & historical (Gem Tones, Metallic FX, the 1903 box…) | MIT | © 2023 Christopher T. Kenny |
| [haR](https://github.com/federicomarini/haR) | Haribo gummy candies (Goldbears, Tropifrutti…) | MIT | © 2015 Federico Marini |
| [MVZlibrary](https://github.com/eachambers/MVZlibrary) | Book spines in the Museum of Vertebrate Zoology library | MIT | © 2023 E. Anne Chambers |
| [RSkittleBrewer](https://github.com/alyssafrazee/RSkittleBrewer) | Skittles & M&M's candy packs | MIT | © 2014–2016 Alyssa Frazee |
| [ggkeyboard](https://github.com/sharlagelfand/ggkeyboard) | Mechanical-keyboard keycap sets (Serika, Cyberpunk, Varmilo…) | MIT | © 2020 Sharla Gelfand |
| [nbapalettes](https://github.com/murrayjw/nbapalettes) | NBA team jersey colors | MIT | © 2021 Josh Murray |

##### Transit & wayfinding

| Source | Drawn from | License | Copyright |
|---|---|---|---|
| [MetroBrewer](https://github.com/juliagdealedo/MetroBrewer) | World metro & train line palettes, by city | CC0-1.0 | Julia G. de Aledo |

#### The natural world

##### Landscapes & places

| Source | Drawn from | License | Copyright |
|---|---|---|---|
| [NatParksPalettes](https://github.com/kevinsblake/NatParksPalettes) | US national parks | MIT | © 2022 Kevin S. Blake |
| [nationalparkscolors](https://github.com/kvenkita/nationalparkscolors) | US national parks (parks not in NatParksPalettes) | MIT | © 2026 Kailas Venkitasubramanian |
| [nationalparkcolors](https://github.com/katiejolly/nationalparkcolors) | US national-park posters (parks not already covered) | CC0-1.0 | Katie Jolly |
| [prakriti](https://github.com/orijitghosh/prakriti) | India's natural landscapes | MIT | © 2026 Arijit Ghosh |
| [sfecol](https://github.com/maltewillmes/sfecol) | San Francisco Estuary landscapes & wildlife | MIT | © 2021 Malte Willmes |
| [PaletteWoodsHole](https://github.com/shu251/PaletteWoodsHole) | Woods Hole & Falmouth scenes | MIT | © 2021 Sarah Hu |
| [ochRe](https://github.com/hollylkirk/ochRe) | Australian landscapes & artworks | MIT | © 2017 ochRe authors (A. Allan, D. Cook, R. Gayler, H. Kirk, R. Peng, E. Saber) |
| [colRoz](https://github.com/jacintak/colRoz) | Australian wildlife & landscapes | MIT | © Jacinta Kong & Nicholas Wu |
| [nycpalettes](https://github.com/kellycotton/nycpalettes) | New York City scenes & skylines (photographs) | MIT | © 2020 Kelly Cotton |

##### Flora & fauna

| Source | Drawn from | License | Copyright |
|---|---|---|---|
| [feathers](https://github.com/shandiya/feathers) | Australian bird plumage | MIT | © 2021 Shandiya Balasubramaniam |
| [tanagR](https://github.com/cdanielcadena/tanagR) | Tanager species plumage | MIT | © 2019 C. Daniel Cadena |
| [ggtrout](https://github.com/eachambers/ggtrout) | Trout species | MIT | © 2023 E. Anne Chambers |
| [birdcolors](https://github.com/bentonelli/birdcolors) | The world's birds | MIT | © 2026 Benjamin Tonelli |
| [poisonfrogs](https://github.com/laurenoconnelllab/poisonfrogs) | Neotropical poison frogs | MIT | © 2025 Camilo Rodríguez López |
| [nudibranch](https://github.com/nikihubbard/nudibranch) | Sea slugs & nudibranchs of Sydney | MIT | © 2026 Niki Hubbard |
| [mncolors](https://github.com/tidy-MN/mncolors) | Minnesota wildlife (corn, gray tree frog, crayfish) | MIT | © 2020 MPCA-data |

##### Earth, sky & cosmos

| Source | Drawn from | License | Copyright |
|---|---|---|---|
| [soilpalettes](https://github.com/kaizadp/soilpalettes) | Soil profiles | MIT | © 2020 Kaizad F. Patel |
| [sunsets](https://github.com/mccarthy-m-g/sunsets) | Canadian Prairie sunsets | CC0-1.0 | Michael McCarthy |
| [futurevisions](https://github.com/JoeyStanley/futurevisions) | NASA/JPL "Visions of the Future" planet posters | MIT | © 2020 Joey Stanley |

---

The works, films, places, and species these palettes reference belong to their
respective creators, studios, and stewards; the source paintings are
overwhelmingly in the public domain.
