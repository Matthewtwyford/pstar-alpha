import { Category } from './category';

export class COLLISIONAVOIDANCE: Category[] = [
    
    'catid' : 1,
    'title' : 'Collision Avoidance',    
    'questions' : [
       {
        'id' : 1,
        'question' : 'Which statement is true with regard to aircraft converging at approximately the same altitude?',
        options : [
          { text : 'A jet airliner has the right of way over all other aircraft', correct: false  },
          { text : 'An aircraft towing objects has the right of way over all power-driven heavier-than-air aircraft.', correct: true },
          { text : 'An aeroplane has the right of way over all other aircraft which are converging from the left.', correct: false },
          { text : 'Aeroplanes towing gliders must give way to helicopters.', correct: false }
          ]
        },
       {
        'id' : 2,
        'question' : 'When two aircraft are converging at approximately the same altitude',
        options : [
          { text : 'both aircraft shall alter heading to the left.', correct: false  },
          { text : 'the aircraft on the right shall avoid the other by descending.', correct: false },
          { text : 'the aircraft that has the other on its right shall give way.', correct: true },
          { text : 'the aircraft that has the other on its left shall give way.', correct: false }
        ]
       },
       {
        'id' : 3,
        'question' : 'When two aircraft are converging at approximately the same altitude, which statement applies?',
         options : [
          { text : 'Gliders shall give way to helicopters.', correct: false  },
          { text : 'Aeroplanes shall give way to power-driven heavier-than-air aircraft.', correct: false },
          { text : 'Gliders shall give way to aeroplanes.', correct: false },
          { text : 'Power-driven heavier-than-air aircraft shall give way to gliders.', correct: true }
        ]
       },
       {
        'id' : 4,
        'question' : 'When two aircraft are converging at approximately the same altitude, which statement applies?',
        options : [
          { text : 'Gliders shall give way to helicopters.', correct: false  },
          { text : 'Aeroplanes shall give way to helicopters.', correct: false },
          { text : 'Helicopters shall give way to aeroplanes.', correct: false },
          { text : 'Helicopters shall give way to gliders.', correct: true }
        ]
       },
       {
        'id' : 5,
        'question' : 'When two aircraft are converging at approximately the same altitude, which statement applies?',
        options : [
          { text : 'Gliders shall give way to helicopters.', correct: false  },
          { text : 'Aeroplanes shall give way to helicopters.', correct: false },
          { text : 'Helicopters shall give way to aeroplanes.', correct: false },
          { text : 'Gliders shall give way to balloons.', correct: true }
        ]
       },
       {
        'id' : 6,
        'question' : 'When converging at approximately the same altitude',
        options : [
          { text : 'balloons shall give way to hang gliders.', correct: false  },
          { text : 'aeroplanes towing gliders shall give way to balloons.', correct: true },
          { text : 'balloons shall give way to gliders.', correct: false },
          { text : 'balloons shall give way to airships.', correct: false }
        ]
       },       
       {
        'id' : 7,
        'question' : 'When two power-driven heavier-than-air aircraft are converging at approximately the same altitude,',
        options : [
          { text : 'the one on the left has the right of way.', correct: false  },
          { text : 'both shall alter heading to the left.', correct: false },
          { text : 'the one on the right has the right of way.', correct: true },
          { text : 'the one on the right shall give way by descending.', correct: false }
        ]
       },
      {
        'id' : 8,
        'question' : 'When two aircraft are approaching head-on or approximately so and there is danger of collision, each pilot shall',
        options : [
          { text : 'decrease airspeed.', correct: false  },
          { text : 'increase airspeed.', correct: false },
          { text : 'alter heading to the right.', correct: true },
          { text : 'alter heading to the left.', correct: false }
        ]
       },
       {
        'id' : 9,
        'question' : 'When overtaking an aircraft at your 12 oclock position, at your altitude, you should',
        options : [
          { text : 'climb.', correct: false  },
          { text : 'descend.', correct: false },
          { text : 'alter heading to the right.', correct: true },
          { text : 'alter heading to the left.', correct: false }
        ]
       },
       {
        'id' : 10,
        'question' : 'Two aircraft are on approach to land, the aircraft at the higher altitude shall',
        options : [
          { text : 'have the right of way.', correct: false  },
          { text : 'overtake the lower aircraft on the left..', correct: false },
          { text : 'give way', correct: true },
          { text : 'complete a 360° turn to the right.', correct: false }
        ]
       }
    ]
 ];
