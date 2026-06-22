# Prospective Students — ready-to-swap templates

Two interchangeable versions of the **Prospective Students** section.
To switch availability, open `config/config.yaml`, locate the `sections:` block,
and **replace it entirely** with ONE of the two blocks below.

- Status badge color is automatic: `OPEN` -> green, `FILLED` -> amber.
- The section shows as a side tab that slides open a panel (`drawer: true`).
- Inside the body, a fenced ``` code block ``` becomes a one-click **copy box**.

After editing:

    git add config/config.yaml
    git commit -m "Update supervision status"
    git push

---

## Version A — `STATUS: FILLED`  (use when you are busy)

````yaml
sections:
  - label: "Prospective Students"
    drawer: true                 # show via a side tab that slides open a panel
    tab_label: "Prospective Students"
    status: "FILLED"             # OPEN -> green badge/tab, FILLED -> amber
    body: |
      I supervise **one BSc/MSc thesis student at a time**, and that position is currently filled. Owing to my accademic commitments, I am **not accepting new thesis proposals at this time**, and cannot reply to application emails until the next cycle.

      **Next evaluation window: Autumn 2026** *.

      My research focuses primarily on **RAG systems** and their various aspects. If you are planning to apply for a future recruitment round, the most suitable candidates generally possess:

      - A solid foundation in **Deep Learning** (architectures, training, evaluation).
      - Practical proficiency in **Python** and **PyTorch**.
      - Some familiarity with **RAG pipelines** and/or **RL fundamentals** (e.g., policy-gradient methods).

      In the meantime, consolidate these foundations, follow recent literature in both areas, and complete a small self-contained project you can later point to. **Please do not send an application email while this section reads FILLED** - messages received in this period cannot be considered. I will update this page as soon as the position reopens.
````

---

## Version B — `STATUS: OPEN`  (use when a slot is free)

````yaml
sections:
  - label: "Prospective Students"
    drawer: true
    tab_label: "Prospective Students"
    status: "OPEN"
    body: |
      I am currently **accepting applications for one BSc/MSc thesis** in **RAG Systems**. As I supervise a single student at a time, applications are reviewed individually and one candidate is selected per cycle.

      **Prerequisites.** A productive collaboration assumes that you already have:

      - A solid background in **Deep Learning**.
      - Working proficiency in **Python** and **PyTorch**.
      - A genuine interest in RAG and/or RL, ideally evidenced by relevant coursework or projects.

      **How to apply.** Send the following two items in a single email:

      1. A **motivation letter** covering (a) your technical background relative to the prerequisites above, and (b) the specific topic within RAG/RL you would like to pursue.
      2. Your **CV**.

      Use this exact subject line:

      ```
      [Research Thesis Application - LAST NAME FIRST NAME]
      ```

      I review every application personally. Thank you for your interest; I look forward to reading your proposal!
````
