---
layout: page
title: Publications
permalink: /publications/
---

## 2025

<div style="display: flex; align-items: flex-start; gap: 20px; margin-bottom: 40px;">
  <div style="flex-shrink: 0;">
    <img src="/assets/papers/wails25_thumb.jpg" alt="Paper Thumbnail" style="width: 180px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
  </div>
  <div>
    <span style="background-color: #003366; color: white; padding: 2px 8px; border-radius: 4px; font-size: 0.8em; font-weight: bold;">WAILS '25</span>
    <h3 style="margin-top: 10px;">Confidential Retrieval-Augmented Generation in Educational Contexts</h3>
    
    Ludovico Boratto, <strong>Francesco Congiu*</strong>, Gianni Fenu, Giacomo Medda<br>
    <em>2nd Workshop on Artificial Intelligence with and for Learning Sciences (WAILS '25)</em><br>
    Part of the <strong>Lecture Notes in Computer Science (LNCS)</strong> book series, Springer.
    
    <div style="margin-top: 15px;">
      <a href="/assets/papers/confidential-rag-edu.pdf" style="margin-right: 15px;">[PDF]</a>
      <a href="#abstract-rag" style="margin-right: 15px;">[Abstract]</a>
      <a href="#bibtex-rag">[BibTeX]</a>
    </div>
  </div>
</div>

---

### Abstract
<a id="abstract-rag"></a>
In recent years, the Retrieval-Augmented Generation (RAG) paradigm has become central to improving the reliability of systems based on Large Language Models (LLMs). However, much of the literature overlooks a crucial requirement in educational and professional settings: **content confidentiality**. 

We present **RetrievEM**, a confidentiality-aware RAG framework that integrates dense retrieval, reranking, and a novel **Backfill** algorithm. Our results show that effectiveness and confidentiality are not conflicting goals, delivering pedagogically useful content while strictly respecting access policies.

### BibTeX
<a id="bibtex-rag"></a>
```bibtex
@inproceedings{boratto2025confidential,
  title={Confidential Retrieval-Augmented Generation in Educational Contexts},
  author={Boratto, Ludovico and Congiu, Francesco and Fenu, Gianni and Medda, Giacomo},
  booktitle={2nd Workshop on Artificial Intelligence with and for Learning Sciences (WAILS)},
  series={Lecture Notes in Computer Science (LNCS)},
  year={2025},
  publisher={Springer}
}
