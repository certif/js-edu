/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {

      const toMasterJS = 800;
      const toLearnBasicProg = 500;
      const targetFocus = config[focus];

      if (knowsProgramming) {
          return Math.ceil( toMasterJS / targetFocus );
      } else {
          return Math.ceil( toMasterJS / targetFocus + toLearnBasicProg / targetFocus );
      }
    
  };
  