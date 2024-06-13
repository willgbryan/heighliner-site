// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/sunburst
import { ResponsiveSunburst } from '@nivo/sunburst'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const sunburst_data = {
    "name": "total_leads_chart",
    "color": "hsl(207, 70%, 50%)",
    "children": [
      {
        "name": "Small Businesses",
        "color": "hsl(349, 70%, 50%)",
        "children": [
          {
            "name": "Professional Services",
            "color": "hsl(125, 70%, 50%)",
            "children": [
              {
                "name": "Law Firms",
                "color": "hsl(95, 70%, 50%)",
                "loc": 65545
              },

              {
                "name": "Accounting",
                "color": "hsl(143, 70%, 50%)",
                "loc": 136057
              },
              {
                "name": "Business Advisory",
                "color": "hsl(205, 70%, 50%)",
                "loc": 101754
              }
            ]
          },
          {
            "name": "Local Services",
            "color": "hsl(242, 70%, 50%)",
            "children": [
              {
                "name": "Franchise",
                "color": "hsl(33, 70%, 50%)",
                "children": [
                  {
                    "name": "Home Repair",
                    "color": "hsl(168, 70%, 50%)",
                  },
                  {
                    "name": "Pharmacy",
                    "color": "hsl(352, 70%, 50%)",
                    "loc": 93441
                  },
                ]
              },
              {
                "name": "Regional Financial Institutions",
                "color": "hsl(283, 70%, 50%)",
                "loc": 160451,
              }
            ]
          }
        ]
      },
      {
        "name": "Reselling Services",
        "color": "hsl(249, 70%, 50%)",
        "children": [
          {
            "name": "Software Distributions",
            "color": "hsl(157, 70%, 50%)",
            "loc": 48933
          },
          {
            "name": "Certified Service Providers",
            "color": "hsl(31, 70%, 50%)",
            "loc": 97407
          }
        ]
      },
      {
        "name": "utils",
        "color": "hsl(321, 70%, 50%)",
        "children": [
          {
            "name": "randomize",
            "color": "hsl(179, 70%, 50%)",
            "loc": 77931
          },
          {
            "name": "resetClock",
            "color": "hsl(204, 70%, 50%)",
            "loc": 139988
          },
          {
            "name": "noop",
            "color": "hsl(222, 70%, 50%)",
            "loc": 19765
          },
          {
            "name": "tick",
            "color": "hsl(51, 70%, 50%)",
            "loc": 161612
          },
          {
            "name": "forceGC",
            "color": "hsl(68, 70%, 50%)",
            "loc": 166765
          },
          {
            "name": "stackTrace",
            "color": "hsl(146, 70%, 50%)",
            "loc": 169945
          },
          {
            "name": "dbg",
            "color": "hsl(25, 70%, 50%)",
            "loc": 190338
          }
        ]
      },
      {
        "name": "generators",
        "color": "hsl(125, 70%, 50%)",
        "children": [
          {
            "name": "address",
            "color": "hsl(5, 70%, 50%)",
            "loc": 132926
          },
          {
            "name": "city",
            "color": "hsl(270, 70%, 50%)",
            "loc": 64765
          },
          {
            "name": "animal",
            "color": "hsl(299, 70%, 50%)",
            "loc": 145274
          },
          {
            "name": "movie",
            "color": "hsl(359, 70%, 50%)",
            "loc": 116061
          },
          {
            "name": "user",
            "color": "hsl(358, 70%, 50%)",
            "loc": 16845
          }
        ]
      },
      {
        "name": "set",
        "color": "hsl(59, 70%, 50%)",
        "children": [
          {
            "name": "clone",
            "color": "hsl(282, 70%, 50%)",
            "loc": 86944
          },
          {
            "name": "intersect",
            "color": "hsl(61, 70%, 50%)",
            "loc": 111478
          },
          {
            "name": "merge",
            "color": "hsl(321, 70%, 50%)",
            "loc": 163034
          },
          {
            "name": "reverse",
            "color": "hsl(145, 70%, 50%)",
            "loc": 43322
          },
          {
            "name": "toArray",
            "color": "hsl(166, 70%, 50%)",
            "loc": 185877
          },
          {
            "name": "toObject",
            "color": "hsl(322, 70%, 50%)",
            "loc": 105369
          },
          {
            "name": "fromCSV",
            "color": "hsl(17, 70%, 50%)",
            "loc": 32584
          },
          {
            "name": "slice",
            "color": "hsl(10, 70%, 50%)",
            "loc": 47397
          },
          {
            "name": "append",
            "color": "hsl(72, 70%, 50%)",
            "loc": 28604
          },
          {
            "name": "prepend",
            "color": "hsl(149, 70%, 50%)",
            "loc": 160459
          },
          {
            "name": "shuffle",
            "color": "hsl(52, 70%, 50%)",
            "loc": 189724
          },
          {
            "name": "pick",
            "color": "hsl(104, 70%, 50%)",
            "loc": 130111
          },
          {
            "name": "plouc",
            "color": "hsl(133, 70%, 50%)",
            "loc": 103837
          }
        ]
      },
      {
        "name": "text",
        "color": "hsl(2, 70%, 50%)",
        "children": [
          {
            "name": "trim",
            "color": "hsl(29, 70%, 50%)",
            "loc": 157904
          },
          {
            "name": "slugify",
            "color": "hsl(204, 70%, 50%)",
            "loc": 95289
          },
          {
            "name": "snakeCase",
            "color": "hsl(164, 70%, 50%)",
            "loc": 51804
          },
          {
            "name": "camelCase",
            "color": "hsl(204, 70%, 50%)",
            "loc": 159082
          },
          {
            "name": "repeat",
            "color": "hsl(287, 70%, 50%)",
            "loc": 153116
          },
          {
            "name": "padLeft",
            "color": "hsl(171, 70%, 50%)",
            "loc": 88580
          },
          {
            "name": "padRight",
            "color": "hsl(70, 70%, 50%)",
            "loc": 78540
          },
          {
            "name": "sanitize",
            "color": "hsl(178, 70%, 50%)",
            "loc": 126354
          },
          {
            "name": "ploucify",
            "color": "hsl(265, 70%, 50%)",
            "loc": 78570
          }
        ]
      },
      {
        "name": "misc",
        "color": "hsl(203, 70%, 50%)",
        "children": [
          {
            "name": "greetings",
            "color": "hsl(155, 70%, 50%)",
            "children": [
              {
                "name": "hey",
                "color": "hsl(159, 70%, 50%)",
                "loc": 49084
              },
              {
                "name": "HOWDY",
                "color": "hsl(347, 70%, 50%)",
                "loc": 161060
              },
              {
                "name": "aloha",
                "color": "hsl(347, 70%, 50%)",
                "loc": 7678
              },
              {
                "name": "AHOY",
                "color": "hsl(216, 70%, 50%)",
                "loc": 160812
              }
            ]
          },
          {
            "name": "other",
            "color": "hsl(125, 70%, 50%)",
            "loc": 154626
          },
          {
            "name": "path",
            "color": "hsl(277, 70%, 50%)",
            "children": [
              {
                "name": "pathA",
                "color": "hsl(251, 70%, 50%)",
                "loc": 123108
              },
              {
                "name": "pathB",
                "color": "hsl(216, 70%, 50%)",
                "children": [
                  {
                    "name": "pathB1",
                    "color": "hsl(119, 70%, 50%)",
                    "loc": 822
                  },
                  {
                    "name": "pathB2",
                    "color": "hsl(191, 70%, 50%)",
                    "loc": 85692
                  },
                  {
                    "name": "pathB3",
                    "color": "hsl(258, 70%, 50%)",
                    "loc": 92446
                  },
                  {
                    "name": "pathB4",
                    "color": "hsl(119, 70%, 50%)",
                    "loc": 123363
                  }
                ]
              },
              {
                "name": "pathC",
                "color": "hsl(278, 70%, 50%)",
                "children": [
                  {
                    "name": "pathC1",
                    "color": "hsl(135, 70%, 50%)",
                    "loc": 157927
                  },
                  {
                    "name": "pathC2",
                    "color": "hsl(93, 70%, 50%)",
                    "loc": 160528
                  },
                  {
                    "name": "pathC3",
                    "color": "hsl(268, 70%, 50%)",
                    "loc": 62190
                  },
                  {
                    "name": "pathC4",
                    "color": "hsl(102, 70%, 50%)",
                    "loc": 85199
                  },
                  {
                    "name": "pathC5",
                    "color": "hsl(247, 70%, 50%)",
                    "loc": 169835
                  },
                  {
                    "name": "pathC6",
                    "color": "hsl(136, 70%, 50%)",
                    "loc": 120695
                  },
                  {
                    "name": "pathC7",
                    "color": "hsl(295, 70%, 50%)",
                    "loc": 196136
                  },
                  {
                    "name": "pathC8",
                    "color": "hsl(358, 70%, 50%)",
                    "loc": 153231
                  },
                  {
                    "name": "pathC9",
                    "color": "hsl(306, 70%, 50%)",
                    "loc": 169874
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }

const MyResponsiveSunburst = () => (
    <ResponsiveSunburst
        data={sunburst_data}
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        id="name"
        value="loc"
        cornerRadius={2}
        borderWidth={4}
        borderColor={{ from: 'color', modifiers: [] }}
        colors={{ scheme: 'purples' }}
        childColor={{
            from: 'color',
            modifiers: [
                [
                    'brighter',
                    0.5
                ]
            ]
        }}
        enableArcLabels={true}
        arcLabelsRadiusOffset={0.4}
        arcLabelsSkipAngle={9}
        arcLabelsTextColor={{ theme: 'labels.text.fill' }}
        transitionMode="startAngle"
    />
)
export const MyResponsiveSunburst = () => ()