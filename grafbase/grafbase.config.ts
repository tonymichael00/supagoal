import { g, auth, config } from '@grafbase/sdk';

const User = g.model('User', {
  name: g.string().length({ min: 2, max: 20 }),
  goalDate: g.date(),
  email: g.string().unique(),
  goals: g
    .relation(() => Goal)
    .list()
    .optional(),
});

const Goal = g.model('Goal', {
  mainGoal: g.string().length({ min: 3 }),
  miniGoals: g
    .relation(() => MiniGoal)
    .list()
    .optional(),
});

const MiniGoal = g.model('MiniGoal', {
  date: g.date(),
  summary: g.string(),
});

export default config({
  schema: g,
});
