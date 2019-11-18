
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('schools').insert([
    { school_name: "Van Buren High", num_issues: 50, num_students: 320, est_costs: 3500.28, school_street: "217 South Main Street", school_city: "Van Buren", school_state: "OH", post_code: "45889", phone: "1-555-555-5555", grade_level: "High School", about: "A neat school" },

    { school_name: "Bayside High", num_issues: 25, num_students: 120, est_costs: 3500.28, school_street: "1234 Bayside Dr.", school_city: "Bayside", school_state: "CA", post_code: "90293", phone: "1-555-555-5555", grade_level: "High School", about: "A great studnet body" },

    { school_name: "Valley Elementary", num_issues: 32, num_students: 280, est_costs: 3500.28, school_street: "507 N. Redwood", school_city: "Napa Valley", school_state: "CA", post_code: "90236", phone: "1-555-555-5555", grade_level: "elementary", about: "We love learning" }
  ]);
};
