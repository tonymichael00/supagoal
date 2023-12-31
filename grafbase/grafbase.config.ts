import { g, auth, config } from '@grafbase/sdk';

// @ts-ignore
const User = g
  .model('User', {
    name: g.string().length({ min: 2, max: 20 }),
    email: g.string().unique(),
    goals: g
      .relation(() => Goal)
      .list()
      .optional(),
  })
  .auth((rules) => {
    rules.public().read();
  });

// @ts-ignore
const Goal = g
  .model('Goal', {
    goalDate: g.date(),
    mainGoal: g.string().length({ min: 3 }),
    miniGoals: g
      .relation(() => MiniGoal)
      .list()
      .optional(),
  })
  .auth((rules) => {
    rules.public().read(), rules.private().create().delete().update();
  });

// @ts-ignore
const MiniGoal = g
  .model('MiniGoal', {
    date: g.date(),
    summary: g.string(),
  })
  .auth((rules) => {
    rules.public().read(), rules.private().create().delete().update();
  });

const jwt = auth.JWT({
  issuer: 'grafbase',
  secret: g.env('NEXTAUTH_SECRET'),
});

export default config({
  schema: g,
  auth: {
    providers: [jwt],
    rules: (rules) => rules.private(),
  },
});
