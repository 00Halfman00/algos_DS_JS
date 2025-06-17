"""
📄 Problem:
  We’re building a resume parser for ApplyPass and need your help!
  Given a list of messy job titles with inconsistent formatting, your task is to write a function
  that returns the most frequently mentioned job title—cleaned up and in lowercase.

  Titles may vary in spacing and capitalization. Treat them as the same if they look similar.

🧩 Example Input:

  ["Software Engineer", " software engineer", "SOFTWARE ENGINEER ", "Data Scientist", "software engineer", "data scientist"]

✅ Expected Output:

  "software engineer"



THEORY, STRATEGY AND PSEUDOCODE
  THEORY
  First, normalize data to get accurate frequency count.

  STRATEGY
  If you clean up the strings, return the string with the highest frequency.

  PSEUDO STEPS
  1   Check if list has anything, else the function will implicitly return None.
      1.1   Use string methods to split the work into smaller problems to fix.  -->  time complexity: O(n * l)
      1.2   Import Counter and use it to return the highest frequency.   -->   time complexity: O(n * l)

  overall time complexity: O(n * l), n = number of job title in list, l = average length of job title


ADVICE:
  Use IDE to run/debug program/also to see what it is actually doing step by step

"""

from collections import Counter


def highest_frequency(job_titles: list[str]) -> str:
    if job_titles:
        # STEP 1
        job_title = None
        for i in range(len(job_titles)):
            job_title = job_titles[i].lower().split()
            job_titles[i] = " ".join(job_title)
        # STEP 2
        frequency_count = Counter(job_titles)
        return frequency_count.most_common(1)[0][0]


job_titles_list1 = [
    "Software Engineer",
    " software engineer",
    "SOFTWARE ENGINEER ",
    "Data Scientist",
    "software engineer",
    "data scientist",
]
print(highest_frequency(job_titles_list1))
