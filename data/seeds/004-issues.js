exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("issues").insert([
    {
      priority: "high",
      title: "pain doors",
      description: "All doors need painting",
      equipment: "doors",
      general_issues: "paint is chipping",
      estimated_cost: "$250",
      completed: "false",
      needs_attention: "true",
      scheduled: "false",
      user_id: "2"
    },
    {
      priority: "medium",
      title: "a/c",
      description: "leaking a/c",
      equipment: "front a/c",
      general_issues: "a/c needs repair",
      estimated_cost: "$125",
      completed: "false",
      needs_attention: "false",
      scheduled: "false",
      user_id: "3"
    },
    {
      priority: "high",
      title: "sink backup",
      description: "Kitchen sink backed up",
      equipment: "kitchen sink",
      general_issues: "kitchen sink needs repair",
      estimated_cost: "$75",
      completed: "false",
      needs_attention: "true",
      scheduled: "false",
      user_id: "2"
    }
  ]);
};
