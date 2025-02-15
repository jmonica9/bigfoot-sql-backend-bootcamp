"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "sightings",
      [
        {
          date: new Date(1990, 9),
          location: "East side of Prince William Sound, Alaska, USA",
          notes:
            "Ed L. was salmon fishing with a companion in Prince William Sound. After anchoring off shore, his companion took a small boat up a river to check on the state of the salmon run. As the day wore on toward evening and he didn't come back at the expected time, Ed scanned upriver and across the adjacent land with binoculars. There he saw a sasquatch walking across the tundra, with long, smooth steps and with dark hair flowing from its shoulders, bouncing behind \"like a cape\" at every step. The sasquatch paid no attention to the boat (distance about 1,000').",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          date: new Date(2000, 9, 2),
          location: "Warren County, New Jersey, USA",
          notes:
            "heh i kinda feel a little dumb that im reporting this but its bothering me so here goes.. bout a month ago i was with a friend and her son, we were hanging out at a camp ground by Allamuchy state park, in Warren county NJ. i think the camp ground was part of Stephens state park either way it was on the Musconetcong river. it was late in the day and we were just walking on the trials by the river. we figured since her son was gonna stay with her folks that evening we would come back later and spend the night at the camp ground. we went home and got together some gear, just sleeping bags and sleeping pads. we stopped at a store got some hotdogs and rolls and a gallon of water then headed to the camp site. i thought maybe a bear was snooping around looking for a free meal, this is bear country and we have a very healthy black bear population, but maybe 30 seconds after i heard the metalic sound i heard someone or something bang a branch against a tree 4 or 5 times in a row, i thought that the bear maybe was getting a little to close to someones camp site. then i again heard banging against a tree but this time it was a bout 100yards into the woods and not near any camping area that i had seen in the daylight. then the tree banging came from the first spot as if answering the other position. the first tree banger was what seemed to be on or near the road by the middle of the camp ground. that kinda made my mind wander i was wondering what was going on..and who is up making all this noise. about 10minutes later i looked into the woods which were slightly iluminated by my dieing fire and i saw what looked like a bear looking into my camp about 20 feet away from behind a tree. i saw just the shadowy outline of it. i could see its head and shoulders slowly move out from behind the tree look in and then move back behind the tree. ive seen bears do this before in the day light but never this close. then i closed my eyes waited a few seconds and opened them just to make sure i wasnt seeing things. but this whatever it was had difined shoulders and a rounded kinda pointy on top head, it didnt have and ears like you would see on a bear, nor the flat head of a bear and if it was a bear its front arms wouldnt have given it the squared off shoulders that i was seeing in the silloette of this figure. i got kinda scared for a few moments and didnt move a at all. i thought for a second about jumping up and yelling at it but i didnt want so get it mad at me or scare it. i looked around before we left to see if i could find any tracks or anything but the ground is was just to hard, there was a few game trails but i didnt look very far or spend alot of time looking. i looked on the internet and found this sight and was surprized to see other sitings in new jersey.",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          date: new Date(2016, 6, 7),
          location: "Sullivan County, New Hampshire, USA",
          notes:
            "I was on my way to Claremont from Lebanon on Rte 120 and was passing by some reeds in a marshy area next to the road that sounded like a huge flock of birds. The creature came out of the reeds and was crouched down looking at me through them. Surprisingly it got out of the reeds from crouched to standing turned around and ran towards the wooded area up a hill and was moving with it's arms brush and tree branches out of the way. It was incredibly fast runner and I got a good look at its coconut shaped head as it ran away. It was light brown/brown. It had incredibly broad shoulders. I went back the same day. The marsh went up to my knees and I could smell a bad odor like garbage. Myself and a friend went back to the sighting. We found a footprint and a hair sample. I could hear wood knocks when my friend James did a call and we also found a large bed of branches and some tree structures. The following month I went back to Claremont and I heard screeching in the woods while I was traveling Rte. 120 on a bicycle.",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("sightings", null, {});
  },
};
